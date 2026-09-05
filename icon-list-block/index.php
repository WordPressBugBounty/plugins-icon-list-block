<?php

/**
 * Plugin Name: Icon List Block
 * Description: Show your icon list in web.
 * Version: 1.2.9
 * Author: bPlugins
 * Author URI: https://bplugins.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: icon-list
 * @fs_free_only /vendor/freemius-lite
 */

// ABS PATH
if (!defined('ABSPATH')) {
    exit;
}

if (function_exists('ilb_fs')) {
    ilb_fs()->set_basename(true, __FILE__);
} else {
    // Constant
    define( 'ILB_VERSION', isset( $_SERVER['HTTP_HOST'] ) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.2.9' );
    define( 'ILB_DIR_URL', plugin_dir_url( __FILE__ ) );
    define( 'ILB_DIR_PATH', plugin_dir_path( __FILE__ ) );


    if ( ! function_exists( 'ilb_fs' ) ) {

        function ilb_fs() {

            global $ilb_fs;

            if ( ! isset( $ilb_fs ) ) {

                // Load Freemius Lite SDK
                require_once ILB_DIR_PATH . '/vendor/freemius-lite/start.php';

                $ilb_fs = fs_lite_dynamic_init( array(
                    'id'                  => '17174',
                    'slug'                => 'icon-list-block',
                    '__FILE__' => ILB_DIR_PATH . 'index.php',
                    'premium_slug'        => 'icon-list-block-pro',
                    'type'                => 'plugin',
                    'public_key'          => 'pk_51f816736288458da2dd37c719fd3',

                    // VERY IMPORTANT
                    'is_premium'          => false,
                    'has_premium_version' => true,
                    'has_addons'          => false,
                    'has_paid_plans'      => true,
                    'menu'                => array(
                        'slug'       => 'edit.php?post_type=icon-list-block',
                        'first-path' => 'edit.php?post_type=icon-list-block&page=ilb_demo_page',
                        'support'    => false,
                    ),
                ) );
            }

            return $ilb_fs;
        }

        // Init Freemius
        ilb_fs();

        // Signal SDK loaded
        do_action( 'ilb_fs_loaded' );
    }


    // ... Your plugin's main file logic ...

   

    if (!class_exists('ILBPlugin')) {
        class ILBPlugin
        {
            public function __construct()
            {
                add_action('enqueue_block_assets', [$this, 'enqueueBlockAssets']);
                add_action('init', [$this, 'onInit']);

                add_action('admin_menu', [$this, 'addSubmenu']);
                add_action('admin_enqueue_scripts', [$this, 'adminEnqueueScripts']);
                // sub menu function hooks

                // Post Type function hooks 
                add_action('init', array($this, 'ilb_icon_list_block_post_type'));

                // shortcode type function hooks 
                add_shortcode('icon-list', [$this, 'ilb_shortcode_handler']);

                //manage column 
                add_filter('manage_icon-list-block_posts_columns', [$this, 'iconListManageColumns'], 10);

                // Custom manage column 
                add_action('manage_icon-list-block_posts_custom_column', [$this, 'iconListManageCustomColumns'], 10, 2);


                add_action('wp_ajax_ilbSaveUninstallOption', [$this, 'ilbSaveUninstallOption']);
                add_action('wp_ajax_ilbGetBlocks', [$this, 'ilbGetBlocks']);
                add_action('admin_init', [$this, 'registerSettings']);
                add_action('rest_api_init', [$this, 'registerSettings']);
            }

            //manage column
            function iconListManageColumns($defaults)
            {
                unset($defaults['date']);
                $defaults['shortcode'] = 'ShortCode';
                $defaults['date'] = 'Date';
                return $defaults;
            }

            // custom manage column
            function iconListManageCustomColumns($column_name, $post_ID)
            {
                if ($column_name == 'shortcode') {
                    echo '<div class="bPlAdminShortcode" id="bPlAdminShortcode-' . esc_attr($post_ID) . '">
					<input value="[icon-list id=' . esc_attr($post_ID) . ']" onclick="copyBPlAdminShortcode(\'' . esc_attr($post_ID) . '\')" readonly>
					<span class="tooltip">Copy To Clipboard</span>
				</div>';
                }
            }

            function ilb_shortcode_handler($atts)
            {
                $post_id = $atts['id'];
                $post = get_post($post_id);
                if (!$post) {
                    return '';
                }
                if (post_password_required($post)) {
                    return get_the_password_form($post);
                }
                switch ($post->post_status) {
                    case 'publish':
                        return $this->displayContent($post);
                    case 'private':
                        if (current_user_can('read_private_posts')) {
                            return $this->displayContent($post);
                        }
                        return '';
                    case 'draft':
                    case 'pending':
                    case 'future':
                        if (current_user_can('edit_post', $post_id)) {
                            return $this->displayContent($post);
                        }
                        return '';
                    default:
                        return '';
                }
            }


            function displayContent($post)
            {
                $blocks = parse_blocks($post->post_content);
                return render_block($blocks[0]);
            }


            // Custom Post Type function calls
            function ilb_icon_list_block_post_type()
            {
                register_post_type(
                    'icon-list-block',
                    array(
                        'label' => 'Icon List',
                        'labels' => [
                            'name' => 'Icon List',
							'singular_name' => 'Icon List',
							'menu_name' => 'Icon List',
							'all_items' => 'ShortCode Generator',
                            'add_new' => 'Add New ShortCode',
                            'add_new_item' => 'Add New ShortCode',
                            'edit_item' => 'Edit Tabbed',
                            'not_found' => 'There is no please add one',
                            'item_published' => 'Icon List Published',
                            'item_updated' => 'Icon List Updated'
                        ],
                        'public' => false,
                        'show_ui' => true,
                        'show_in_rest' => true,
                        'menu_icon' =>  'dashicons-editor-ul',
                        'template' => [['ilb/icon-list']],
                        'template_lock' => 'all',
                    )
                );
            }

     

            function registerSettings()
            {
                register_setting('ilbUtils', 'ilbUtils', [
                    'show_in_rest' => [
                        'name' => 'ilbUtils',
                        'schema' => ['type' => 'string']
                    ],
                    'type' => 'string',
                    'default' => wp_json_encode(['nonce' => wp_create_nonce('wp_ajax')]),
                    'sanitize_callback' => 'sanitize_text_field'
                ]);
            }

            function enqueueBlockAssets()
            {
                wp_register_style('fontAwesome', ILB_DIR_URL . 'assets/css/font-awesome.min.css', [], '6.4.2'); // Icon
            }

            function onInit()
            {
                register_block_type(__DIR__ . '/build');
            }

            function addSubmenu()
            {
                add_submenu_page(
                    'edit.php?post_type=icon-list-block',
                    'Demo Page',
                    'Help & Demos',
                    'manage_options',
                    'ilb_demo_page',
                    [$this, 'ilb_render_demo_page']
                );
            }

            function ilb_render_demo_page() {
                ?>
                <div id="ilbDashboard"
                        data-info="<?php echo esc_attr(wp_json_encode([
                            'version'=>ILB_VERSION,
                            'licenseActiveNonce' => wp_create_nonce( 'bPlLicenseActivation' ),
                            'action' => 'ilbGetBlocks',
                            'nonce' => wp_create_nonce( 'ilb_admin_nonce' ),
                            'adminUrl' => admin_url(),
                            'deleteDataOnUninstall' => (bool) get_option( 'ilbDeleteDataOnUninstall', false ),
                            'uninstallNonce' => wp_create_nonce( 'ilb_save_uninstall_option' )
                        ]))?>"
                        >

                </div>
                <?php
            }

            /**
             * Blocks that can never be turned off.
             *
             * `icon-list` is this plugin's own block — the one every existing post and
             * shortcode already contains. It is flagged `required` in the dashboard
             * registry (dashboard/utils/blocks.js), so its toggle is already locked in
             * the UI; this is the server-side counterpart, so a stale or hand-edited
             * option can never take it out of the inserter.
             */
            function ilbRequiredBlocks() {
                return ['icon-list'];
            }

            /**
             * The block folder names the admin has toggled OFF, as stored in the
             * `ilbBlocks` option. Required blocks are always stripped out.
             */
            function ilbDisabledBlocks() {
                $disabled_blocks = get_option('ilbBlocks', []);

                if (!is_array($disabled_blocks)) {
                    $disabled_blocks = [];
                }

                return array_values(array_diff($disabled_blocks, $this->ilbRequiredBlocks()));
            }

            /**
             * ilbGetBlocks (AJAX) — read/write the list of DISABLED block folder names.
             *
             * GET  (no `data`) → returns the current `ilbBlocks` option.
             * POST (with `data`) → overwrites it with the posted JSON array.
             *
             * Backs the dashboard's Blocks page (dashboard/hooks/useBlocksSettings.js).
             * Required blocks (see ilbRequiredBlocks) are stripped before saving, so the
             * Icon List block can never be switched off.
             */
            function ilbGetBlocks() {
                $nonce = sanitize_text_field(wp_unslash($_POST['_wpnonce'] ?? ''));

                if (!wp_verify_nonce($nonce, 'ilb_admin_nonce')) {
                    wp_send_json_error('Invalid Request');
                }

                if (!current_user_can('manage_options')) {
                    wp_send_json_error(['message' => __('You do not have permission to perform this action.', 'icon-list')], 403);
                }

                if (!isset($_POST['data'])) {
                    wp_send_json_success($this->ilbDisabledBlocks());
                }

                $data = json_decode(sanitize_text_field(wp_unslash($_POST['data'])), true);

                if (!is_array($data)) {
                    wp_send_json_error('Invalid Data');
                }

                // Only ever store plain folder-name strings, never a required block.
                $data = array_values(array_unique(array_map('sanitize_key', $data)));
                $data = array_values(array_diff($data, $this->ilbRequiredBlocks()));

                update_option('ilbBlocks', $data);

                wp_send_json_success($data);
            }

            // Persist the dashboard "delete data on uninstall" toggle.
            // Contract matches bpl-tools/Admin/Settings: reads $_POST['nonce'] and $_POST['enabled'].
            function ilbSaveUninstallOption() {
                $nonce = sanitize_text_field( wp_unslash( $_POST['nonce'] ?? '' ) );

                if ( ! wp_verify_nonce( $nonce, 'ilb_save_uninstall_option' ) ) {
                    wp_send_json_error( [ 'message' => __( 'Invalid security token.', 'icon-list' ) ], 403 );
                }

                if ( ! current_user_can( 'manage_options' ) ) {
                    wp_send_json_error( [ 'message' => __( 'You do not have permission to perform this action.', 'icon-list' ) ], 403 );
                }

                $raw_enabled = isset( $_POST['enabled'] ) ? sanitize_text_field( wp_unslash( $_POST['enabled'] ) ) : '';
                $enabled     = ( 'true' === $raw_enabled || '1' === $raw_enabled );

                update_option( 'ilbDeleteDataOnUninstall', $enabled );

                wp_send_json_success( [
                    'enabled' => $enabled,
                    'message' => $enabled
                        ? __( 'Data deletion enabled.', 'icon-list' )
                        : __( 'Data will be preserved on uninstall.', 'icon-list' ),
                ] );
            }

            function adminEnqueueScripts() {

                $screen = get_current_screen();

                if (isset($screen->post_type) && $screen->post_type === 'icon-list-block'){
                    wp_enqueue_style('shortcode-style', ILB_DIR_URL . 'build/shortcode-style.css', [], ILB_VERSION);
                    wp_enqueue_script('shortcode-js', ILB_DIR_URL . 'build/shortcode-js.js', [], ILB_VERSION, true);
                }                

                wp_register_script('ilb-view', ILB_DIR_URL . 'build/view.js', ['react', 'react-dom'], ILB_VERSION);
                wp_register_style('fontAwesome', ILB_DIR_URL . 'assets/css/font-awesome.min.css', [], ILB_VERSION);
                wp_register_style('ilb-view', ILB_DIR_URL . 'build/view.css', ['fontAwesome'], ILB_VERSION);

                if (isset($screen->base) && $screen->base === 'icon-list-block_page_ilb_demo_page'){
                    wp_enqueue_script('fs', ILB_DIR_URL . 'assets/js/fs.js', [], '1');
                    wp_enqueue_style('ilb-dashboard-help', ILB_DIR_URL . 'build/dashboard.css', ['ilb-view'], ILB_VERSION);
                    wp_enqueue_script('ilb-dashboard-help', ILB_DIR_URL . 'build/dashboard.js', ['react', 'wp-api', 'react-dom', 'wp-components', 'fs', 'wp-util'], ILB_VERSION);
                    wp_set_script_translations('ilb-dashboard-help', 'icon-list', ILB_DIR_PATH . 'languages');
                }
            }
        }

        new ILBPlugin();
    }

    
}
