/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../bpl-tools/utils/data.js":
/*!**********************************!*\
  !*** ../bpl-tools/utils/data.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deskBreakpoint: () => (/* binding */ deskBreakpoint),
/* harmony export */   mobileBreakpoint: () => (/* binding */ mobileBreakpoint),
/* harmony export */   tabBreakpoint: () => (/* binding */ tabBreakpoint)
/* harmony export */ });
const deskBreakpoint = '@media only screen and (min-width: 1025px)';
const tabBreakpoint = '@media only screen and (min-width: 641px) and (max-width: 1024px)';
const mobileBreakpoint = '@media only screen and (max-width: 640px)';

/***/ }),

/***/ "../bpl-tools/utils/getCSS.js":
/*!************************************!*\
  !*** ../bpl-tools/utils/getCSS.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAdvBGCSS: () => (/* binding */ getAdvBGCSS),
/* harmony export */   getBackgroundCSS: () => (/* binding */ getBackgroundCSS),
/* harmony export */   getBorderBoxCSS: () => (/* binding */ getBorderBoxCSS),
/* harmony export */   getBorderCSS: () => (/* binding */ getBorderCSS),
/* harmony export */   getBoxCSS: () => (/* binding */ getBoxCSS),
/* harmony export */   getColorsCSS: () => (/* binding */ getColorsCSS),
/* harmony export */   getGradientCSS: () => (/* binding */ getGradientCSS),
/* harmony export */   getIconCSS: () => (/* binding */ getIconCSS),
/* harmony export */   getMultiShadowCSS: () => (/* binding */ getMultiShadowCSS),
/* harmony export */   getOverlayCSS: () => (/* binding */ getOverlayCSS),
/* harmony export */   getPropertyBoxCSS: () => (/* binding */ getPropertyBoxCSS),
/* harmony export */   getSeparatorCSS: () => (/* binding */ getSeparatorCSS),
/* harmony export */   getShadowCSS: () => (/* binding */ getShadowCSS),
/* harmony export */   getSpaceCSS: () => (/* binding */ getSpaceCSS),
/* harmony export */   getTypoCSS: () => (/* binding */ getTypoCSS)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "../bpl-tools/utils/data.js");

const getBackgroundCSS = (bg, isSolid = true, isGradient = true, isImage = true) => {
  const {
    type = 'solid',
    color = '#000000b3',
    gradient = 'linear-gradient(135deg, #4527a4, #8344c5)',
    image = {},
    position = 'center center',
    attachment = 'initial',
    repeat = 'no-repeat',
    size = 'cover',
    overlayColor = '#000000b3'
  } = bg || {};
  const styles = 'gradient' === type && isGradient ? `background: ${gradient};` : 'image' === type && isImage ? `background: url(${image?.url});
				background-color: ${overlayColor};
				background-position: ${position};
				background-size: ${size};
				background-repeat: ${repeat};
				background-attachment: ${attachment};
				background-blend-mode: overlay;` : isSolid && `background: ${color};`;
  return styles;
}; // PHP version in Stepped Content

const getBorderCSS = border => {
  const {
    width = '0px',
    style = 'solid',
    color = '',
    side = 'all',
    radius = '0px'
  } = border || {};
  const borderSideCheck = s => {
    const bSide = side?.toLowerCase();
    return bSide?.includes('all') || bSide?.includes(s);
  };
  const noWidth = width === '0px' || !width;
  const borderCSS = `${width} ${style} ${color}`;
  const styles = `
		${noWidth ? '' : ['top', 'right', 'bottom', 'left'].map(side => borderSideCheck(side) ? `border-${side}: ${borderCSS};` : '').join('')}
		${!radius ? '' : `border-radius: ${radius};`}
	`;
  return styles;
};
const getBorderBoxCSS = border => {
  if (!border) return '';
  const generateBorderCSS = borderObj => {
    const {
      color = '#000000',
      style = 'solid',
      width = '0px'
    } = borderObj;
    return `${width} ${style} ${color}`;
  };
  if ('object' === typeof border && !Array.isArray(border)) {
    if (border.hasOwnProperty('top') || border.hasOwnProperty('right') || border.hasOwnProperty('bottom') || border.hasOwnProperty('left')) {
      const sides = ['top', 'right', 'bottom', 'left'];
      return sides.map(side => border[side] ? `border-${side}: ${generateBorderCSS(border[side])};` : '').join(' ').trim();
    } else {
      return `border: ${generateBorderCSS(border)};`;
    }
  }
  return '';
};
const getColorsCSS = colors => {
  const {
    color = '#333',
    bgType = 'solid',
    bg = '',
    gradient = 'linear-gradient(135deg, #4527a4, #8344c5)'
  } = colors || {};
  const styles = `
		${color ? `color: ${color};` : ''}
		${gradient || bg ? `background: ${'gradient' === bgType ? gradient : bg};` : ''}
	`;
  return styles;
};
const getIconCSS = (icon, isSize = true, isColor = true) => {
  const {
    fontSize = 16,
    colorType = 'solid',
    color = 'inherit',
    gradient = 'linear-gradient(135deg, #4527a4, #8344c5)'
  } = icon || {};
  const colorCSS = 'gradient' === colorType ? `color: transparent; background-image: ${gradient}; -webkit-background-clip: text; background-clip: text;` : `color: ${color};`;
  const styles = `
		${!fontSize || !isSize ? '' : `font-size: ${fontSize}px;`}
		${isColor ? colorCSS : ''}
	`;
  return styles;
};
const getMultiShadowCSS = (value, type = 'box') => {
  let styles = '';
  value?.map((item, index) => {
    const {
      hOffset = '0px',
      vOffset = '0px',
      blur = '0px',
      spreed = '0px',
      color = '#7090b0',
      isInset = false
    } = item || {};
    const inset = isInset ? 'inset' : '';
    const offsetBlur = `${hOffset} ${vOffset} ${blur}`;
    const isComa = index + 1 >= value.length ? '' : ', ';
    styles += 'text' === type ? `${offsetBlur} ${color}${isComa}` : `${offsetBlur} ${spreed} ${color} ${inset}${isComa}`;
  });
  return styles || 'none';
};
const getSeparatorCSS = separator => {
  const {
    width = '50%',
    height = '2px',
    style = 'solid',
    color = '#bbb'
  } = separator || {};
  const styles = `
		width: ${width};
		${'0px' === height && '0em' === height && '0rem' === height ? '' : `border-top: ${height} ${style} ${color};`}
	`;
  return styles;
};
const getShadowCSS = (shadow, type = 'box') => {
  const {
    hOffset = '0px',
    vOffset = '0px',
    blur = '0px',
    spreed = '0px',
    color = '#7090b0',
    isInset = false
  } = shadow || {};
  const inset = isInset ? 'inset' : '';
  const offsetBlur = `${hOffset} ${vOffset} ${blur}`;
  const styles = 'text' === type ? `${offsetBlur} ${color}` : `${offsetBlur} ${spreed} ${color} ${inset}`;
  return styles || 'none';
};
const getSpaceCSS = space => {
  const {
    side = 2,
    vertical = '0px',
    horizontal = '0px',
    top = '0px',
    right = '0px',
    bottom = '0px',
    left = '0px'
  } = space || {};
  const styles = 2 === side ? `${vertical} ${horizontal}` : `${top} ${right} ${bottom} ${left}`;
  return styles;
};
const getTypoCSS = (selector, typo, isFamily = true) => {
  const {
    fontFamily = 'Default',
    fontCategory = 'sans-serif',
    fontVariant = 400,
    fontWeight = 400,
    isUploadFont = true,
    fontSize = {
      desktop: 15,
      tablet: 15,
      mobile: 15
    },
    fontStyle = 'normal',
    textTransform = 'none',
    textDecoration = 'auto',
    lineHeight = '135%',
    letterSpace = '0px'
  } = typo || {};
  const generateCss = (value, cssProperty) => !value ? '' : `${cssProperty}: ${value};`;
  const isEmptyFamily = !isFamily || !fontFamily || 'Default' === fontFamily;
  const desktopFontSize = fontSize?.desktop || fontSize;
  const tabletFontSize = fontSize?.tablet || desktopFontSize;
  const mobileFontSize = fontSize?.mobile || tabletFontSize;
  const styles = `
		${isEmptyFamily ? '' : `font-family: '${fontFamily}', ${fontCategory};`}
		${generateCss(fontWeight, 'font-weight')}
		${`font-size: ${desktopFontSize}px;`}
		${generateCss(fontStyle, 'font-style')}
		${generateCss(textTransform, 'text-transform')}
		${generateCss(textDecoration, 'text-decoration')}
		${generateCss(lineHeight, 'line-height')}
		${generateCss(letterSpace, 'letter-spacing')}
	`;

  // Google font link
  const linkQuery = !fontVariant || 400 === fontVariant ? '' : '400i' === fontVariant ? ':ital@1' : fontVariant?.includes('00i') ? `: ital, wght@1, ${fontVariant?.replace('00i', '00')} ` : `: wght@${fontVariant} `;
  const link = isEmptyFamily ? '' : `https://fonts.googleapis.com/css2?family=${fontFamily?.split(' ').join('+')}${linkQuery.replace(/ /g, '')}&display=swap`;
  return {
    googleFontLink: !isUploadFont || isEmptyFamily ? '' : `@import url(${link});`,
    styles: `${selector}{
			${styles}
		}
		${_data__WEBPACK_IMPORTED_MODULE_0__.tabBreakpoint} {
			${selector}{
				${`font-size: ${tabletFontSize}px;`}
			}
		}
		${_data__WEBPACK_IMPORTED_MODULE_0__.mobileBreakpoint} {
			${selector}{
				${`font-size: ${mobileFontSize}px;`}
			}
		}`.replace(/\s+/g, ' ').trim()
  };
};
const getBoxCSS = val => {
  if (!val) return '0';
  if (typeof val === 'string') return val;
  if (typeof val === 'object' && !Array.isArray(val)) {
    const order = ['top', 'right', 'bottom', 'left'];
    return order.map(side => val[side] || '0').join(' ');
  }
  return '0';
};
const getPropertyBoxCSS = (property, value) => value ? `${property}: ${getBoxCSS(value)};` : '';

// Murad Wahid
const getGradientCSS = gradient => {
  const {
    type,
    radialType,
    colors,
    centerPositions,
    angel
  } = gradient || {};
  if (gradient) {
    const gradientColors = colors?.map(({
      color,
      position
    }) => `${color} ${position}%`);
    const liner = `linear-gradient(${angel}deg, ${gradientColors})`;
    const radial = `radial-gradient(${radialType} at ${centerPositions?.x}% ${centerPositions?.y}%,${gradientColors})`;
    return type === 'linear' ? `background: ${liner};` : `background: ${radial};`;
  }
  return '';
};
const getSolidBGCSS = bg => `${bg ? `background: ${bg};` : ''}`;
const getImagePosition = img => {
  const {
    position = 'center center',
    xPosition = 0,
    yPosition = 0,
    attachment = '',
    repeat = 'no-repeat',
    size = 'cover',
    customSize = '0px'
  } = img || {};
  const cd = v => 'initial' !== v;
  return `
		${cd(position) ? `background-position: ${'custom' === position ? `${xPosition} ${yPosition}` : position};` : ''}
		${attachment && cd(attachment) ? `background-attachment: ${attachment};` : ''}
		${cd(repeat) ? `background-repeat: ${repeat};` : ''}
		${cd(size) ? `background-size: ${'custom' === size ? `${customSize} auto` : size};` : ''}
	`;
};
const getImageCSS = (img = {}) => {
  if (img) {
    return {
      desktop: img.url ? `background-image: url(${img.url}); ${getImagePosition(img?.desktop)}` : '',
      tablet: img.url ? getImagePosition(img?.tablet) : '',
      mobile: img.url ? getImagePosition(img?.mobile) : ''
    };
  }
  return '';
};
const getVideoCSS = (video, selector) => {
  const {
    url,
    loop
  } = video || {};
  const parentEl = document.querySelector(selector);
  const el = parentEl?.querySelector('.bPlVideo');
  const videoEl = document.createElement('video');
  videoEl.muted = true;
  videoEl.autoplay = true;
  videoEl.classList.add('bPlVideo');
  if (!el) {
    if (parentEl && url) {
      videoEl.innerHTML = `<source src=${url}></source>`;
      parentEl.appendChild(videoEl);
    }
  }
  videoEl.loop = loop;
  videoEl.play();
  return `${selector} .bPlVideo{
		left: 0;
		min-height: 100%;
		min-width: 100%;
		position: absolute;
		width: -webkit-fill-available;
		top: 0;
		z-index: 0;
	}`;
};
const getAdvBGCSS = (background, selector, isHover = false) => {
  const {
    type = 'color',
    color,
    gradient,
    img,
    video
  } = background || {};
  const bgCSS = type === 'color' ? getSolidBGCSS(color) : type === 'gradient' ? getGradientCSS(gradient) : type === 'image' ? getImageCSS(img).desktop : '';
  const tablet = type === 'image' ? getImageCSS(img).tablet : '';
  const mobile = type === 'image' ? getImageCSS(img).mobile : '';
  const sl = isHover ? `${selector}:hover` : selector;
  return `
		${type === 'video' ? getVideoCSS(video, selector) : ''}

		${sl}{
			${bgCSS}
		}

		${_data__WEBPACK_IMPORTED_MODULE_0__.tabBreakpoint} {
			${sl}{
				${tablet}
			}
		}
		${_data__WEBPACK_IMPORTED_MODULE_0__.mobileBreakpoint} {
			${sl}{
				${mobile}
			}
		}
	`.replace(/\s+/g, ' ').trim();
};
const getOverlayCSS = (overlay, selector, isHover = false) => {
  const {
    isEnabled,
    colors,
    opacity = 1,
    blend,
    filter = '',
    blur = 0,
    brightness = 100,
    contrast = 100,
    saturation = 100,
    hue = 0
  } = overlay || {};
  const filterCSSValue = `${100 !== brightness ? `brightness(${brightness}%)` : ''} ${100 !== contrast ? `contrast(${contrast}%)` : ''} ${100 !== saturation ? `saturate(${saturation}%)` : ''} ${0 !== blur ? `blur(${blur}px)` : ''} ${0 !== hue ? `hue-rotate(${hue}deg)` : ''}`;
  const filterCSS = `${filter}: ${filter ? filterCSSValue : ''}; -webkit-${filter}: ${filter ? filterCSSValue : ''};`;
  const blendCSS = blend ? `mix-blend-mode: ${blend};` : '';
  const sl = isHover ? `${selector}:hover::after` : `${selector}::after`;
  return isEnabled ? `
		${selector}::after{
			content: '';
			position: absolute;
			inset: 0;
		}
		${getAdvBGCSS(colors, sl, false)}
		${sl}{
			opacity: ${opacity};
			${blendCSS}
			${filterCSS}
		}
	`.replace(/\s+/g, ' ').trim() : '';
};

/***/ }),

/***/ "./src/Components/Common/Style.js":
/*!****************************************!*\
  !*** ./src/Components/Common/Style.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../bpl-tools/utils/getCSS */ "../bpl-tools/utils/getCSS.js");
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/data */ "./src/utils/data.js");



const Style = ({
  attributes,
  id
}) => {
  const {
    alignment,
    width,
    background,
    padding,
    border,
    shadow,
    headerMargin,
    titleTypo,
    titleColor,
    descTypo,
    descColor,
    headerSep,
    listIconSize,
    listIconColors,
    listTextTypo,
    listTextColor,
    descriptionColor,
    descriptionTypo,
    badgeStyles,
    badgeTextTypo,
    theme5Styles,
    featureTypo,
    listItemsBgColor,
    singleIconColor,
    theme6Styles,
    iconUploadButton,
    columns,
    columnGap,
    rowGap,
    uploadListIconSize
  } = attributes;
  const {
    iconPulsColor,
    iconBgBlur
  } = theme5Styles;
  const {
    animateColor
  } = singleIconColor;
  const {
    setIconUpload
  } = iconUploadButton;
  const mainSl = `#${id}`;
  const iconListSl = `${mainSl} .${_utils_data__WEBPACK_IMPORTED_MODULE_2__.prefix}`;
  const headerSl = `${iconListSl} .header`;
  const featureHeader = `${iconListSl} .featureHeader`;
  const themeThree = `${iconListSl} ul.theme3`;
  const featureSl = `${iconListSl} ul.theme3 .list .feature-container .feature`;
  const listItemsBgSl = `${iconListSl} ul.lists li.list`;
  const defaultImgSl = `${iconListSl} ul.lists li.list`;
  const featureIconSl = `${featureSl} .icon-wrapper .theme3Icon`;
  const featureImgSl = `${featureSl} .icon-wrapper`;
  const featureDesSl = `${featureSl} .featureDescription`;
  const badgeSl = `${iconListSl} ul.theme4 .badge`;
  const theme5Sl = `${iconListSl} ul.theme5`;
  const theme5BgElementSl1 = `${iconListSl} ul.theme5 .bg-element.bg-element-1`;
  const theme5BgElementSl2 = `${iconListSl} ul.theme5 .bg-element.bg-element-2`;
  const theme5IconCardSl = `${iconListSl} ul.theme5 .icon-card`;
  const theme5IconSl = `${iconListSl} ul.theme5 .theme5Icon`;
  const theme5ImgSl = `${iconListSl} ul.theme5`;
  const theme5IconCircle = `${iconListSl} ul.theme5 .icon-circle`;
  const theme5IconWrapper = `${iconListSl} ul.theme5 .icon-wrapper`;
  const theme5TitleSl = `${iconListSl} ul.theme5 .card-title`;
  const theme5DesSl = `${iconListSl} ul.theme5 .card-description`;
  const theme5BgBlurSl = `${iconListSl} ul.theme5 .icon-container .icon-bg-blur`;
  const theme5IconPulsSl = `${iconListSl} ul.theme5 .icon-wrapper .icon-pulse`;
  const theme6IconSl = `${iconListSl} ul.theme6 .icon-container .theme6Icon`;
  const theme6ImgSl = `${iconListSl} ul.theme6 .icon-container`;
  const theme6DesSl = `${iconListSl} ul.theme6 .theme6Des`;
  const theme6BtnSl = `${iconListSl} ul.theme6 .try-button`;
  const theme7Sl = `${iconListSl} ul.theme7`;
  const theme7CardSl = `${iconListSl} ul.theme7 .glass-card`;
  const theme7TitleSl = `${iconListSl} ul.theme7 .card-title`;
  const theme7DesSl = `${iconListSl} ul.theme7 .card-description`;
  const theme7IconSl = `${iconListSl} ul.theme7 .theme7Icon`;
  const theme7ImgSl = `${iconListSl} ul.theme7 .icon-satellite`;
  const theme7satelliteSl = `${iconListSl} ul.theme7 .orbit .satellite`;
  const iconSize = 30 < listIconSize ? listIconSize + listIconSize / 2 : listIconSize + listIconSize / 1.5;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", {
    dangerouslySetInnerHTML: {
      __html: `
		${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_1__.getTypoCSS)('', titleTypo)?.googleFontLink}
		${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_1__.getTypoCSS)('', descTypo)?.googleFontLink}
		${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_1__.getTypoCSS)('', listTextTypo)?.googleFontLink}
		${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_1__.getTypoCSS)(`${headerSl} .title`, titleTypo)?.styles}
		${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_1__.getTypoCSS)(`${headerSl} .description`, descTypo)?.styles}
		${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_1__.getTypoCSS)(`${iconListSl} ul.lists .text`, listTextTypo)?.styles}
		${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_1__.getTypoCSS)(`${iconListSl} ul.lists .description`, descriptionTypo)?.styles}
		${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_1__.getTypoCSS)(`${featureHeader}`, featureTypo)?.styles}
		${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_1__.getTypoCSS)(`${featureDesSl}`, listTextTypo)?.styles}
		${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_1__.getTypoCSS)(`${badgeSl}`, badgeTextTypo)?.styles}
		${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_1__.getTypoCSS)(`${theme5TitleSl}`, listTextTypo)?.styles}
		${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_1__.getTypoCSS)(`${theme5DesSl}`, descriptionTypo)?.styles}
		${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_1__.getTypoCSS)(`${theme6DesSl}`, listTextTypo)?.styles}
		${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_1__.getTypoCSS)(`${theme6BtnSl}`, badgeTextTypo)?.styles}
		${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_1__.getTypoCSS)(`${theme7TitleSl}`, listTextTypo)?.styles}
		${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_1__.getTypoCSS)(`${theme7DesSl}`, descriptionTypo)?.styles}
	

		${themeThree}{
			grid-template-columns: repeat(${columns.desktop}, 1fr);
			column-gap: ${columnGap}px;
			row-gap: ${rowGap}px;
		}
		${theme5Sl}{
			grid-template-columns: repeat(${columns.desktop}, 1fr);
			column-gap: ${columnGap}px;
			row-gap: ${rowGap}px;
		}
		${theme7Sl}{
			grid-template-columns: repeat(${columns.desktop}, 1fr);
			column-gap: ${columnGap}px;
			row-gap: ${rowGap}px;
		}
		${defaultImgSl} img{
			width: ${uploadListIconSize}px;
			height: ${uploadListIconSize}px;
		}
		${featureImgSl} img{
			width: ${uploadListIconSize}px;
			height: ${uploadListIconSize}px;
		}
		${theme5ImgSl} img{
			width: ${uploadListIconSize}px !important;
			height: ${uploadListIconSize}px !important;
		}
		${theme6ImgSl} img{
			width: ${uploadListIconSize}px !important;
			height: ${uploadListIconSize}px !important;
			max-width:initial;
		}
		
		${theme7ImgSl} img{
			width: ${uploadListIconSize}px !important;
			height: ${uploadListIconSize}px !important;
		}
		${mainSl}{
			text-align: ${alignment};
		}
		${iconListSl}{
			width: ${['0px', '0%', '0em'].includes(width) ? 'auto' : width};
			${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_1__.getBackgroundCSS)(background)}
			padding: ${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_1__.getSpaceCSS)(padding)};
			${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_1__.getBorderCSS)(border)}
			box-shadow: ${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_1__.getShadowCSS)(shadow)};
		}
		${listItemsBgSl}{
			${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_1__.getBackgroundCSS)(listItemsBgColor)}
		}
		${headerSl}{
			margin: ${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_1__.getSpaceCSS)(headerMargin)};
		}
		${headerSl} .title{
			color: ${titleColor};
		}
		${headerSl} .description{
			color: ${descColor};
		}
		${headerSl} .separator{
			${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_1__.getSeparatorCSS)(headerSep)}
		}
		${iconListSl} ul.lists .icon{
		    font-size: ${listIconSize}px;
			width: ${iconSize}px;
			height: ${iconSize}px;
			${setIconUpload === "select" && (0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_1__.getColorsCSS)(listIconColors)}
		}
		${iconListSl} ul.lists .text{
			max-width: calc(100% - ${iconSize + 15}px);
			color: ${listTextColor};
		}
		${iconListSl} ul.lists .description{
			color: ${descriptionColor};
		}
		${featureHeader}{
			color: ${titleColor};
		}
		${featureIconSl}{
			font-size: ${listIconSize}px;
			${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_1__.getColorsCSS)(listIconColors)}
			padding: 8px;
    		border-radius: 8px;
			
		}
		${featureDesSl}{
			color: ${listTextColor};
		}
		${badgeSl}{
			${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_1__.getColorsCSS)(badgeStyles)}
		}
		${theme5BgElementSl1}{
			${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_1__.getBackgroundCSS)(listItemsBgColor)}
		}
		${theme5BgElementSl2}{
			${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_1__.getBackgroundCSS)(listItemsBgColor)}
		}
		${theme5IconCardSl}{
			${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_1__.getBackgroundCSS)(listItemsBgColor)}
		}
		${theme5IconSl}{
			color: ${listIconColors};
			font-size: ${listIconSize}px;
		}
		
		${theme5TitleSl}{
			color: ${listTextColor};
		}
		${theme5DesSl}{
			color: ${descriptionColor};
		}
		${theme5IconPulsSl}{
			background: ${iconPulsColor};
		}
		${theme5BgBlurSl}{
			background: ${iconBgBlur};
		}
		${theme5IconCircle}{
			 ${setIconUpload === "select" && `
				width: calc(${listIconSize}px + 1.3rem);
				height: calc(${listIconSize}px + 1.3rem);
				${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_1__.getColorsCSS)(listIconColors)}
			`}
		}
		${theme5IconWrapper}{
			
			${setIconUpload === "select" ? `
            width: calc(${listIconSize}px/2 + 3rem);
			height: calc(${listIconSize}px/2 + 3rem);
			` : `
			width: calc(${listIconSize}px/2 + 2rem);
			height: calc(${listIconSize}px/2 + 2rem);
				`}
		}
		${theme6IconSl}{
			font-size: ${listIconSize}px;
			${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_1__.getColorsCSS)(listIconColors)}
		    padding: 7px;
            border-radius: 4px;
		}
		${theme6DesSl}{
			color: ${listTextColor};
		}
		${theme6BtnSl}{
			${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_1__.getColorsCSS)(theme6Styles)}
		}
		${theme7CardSl}{
			${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_1__.getBackgroundCSS)(listItemsBgColor)}
		}
		${theme7TitleSl}{
			color: ${listTextColor};
		}
		${theme7IconSl}{
			font-size: ${listIconSize}px;
			${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_1__.getColorsCSS)(listIconColors)}
		}
		${theme7satelliteSl}{
			background: ${animateColor};
		}
		${theme7DesSl}{
			color: ${descriptionColor};
		}

		@media (max-width: 1024px) {
			${themeThree}{
				grid-template-columns: repeat(${columns.tablet}, 1fr);
			}
			${theme5Sl}{
				grid-template-columns: repeat(${columns.tablet}, 1fr);
			}
			${theme7Sl}{
				grid-template-columns: repeat(${columns.tablet}, 1fr);
			}
		}
		
		@media (max-width: 640px) {
			${themeThree}{
				grid-template-columns: repeat(${columns.mobile}, 1fr);
			}
			${theme5Sl}{
				grid-template-columns: repeat(${columns.mobile}, 1fr);
			}
			${theme7Sl}{
				grid-template-columns: repeat(${columns.mobile}, 1fr);
			}
		}
		`.replace(/\s+/g, ' ')
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Style);

/***/ }),

/***/ "./src/Components/Common/Themes.js":
/*!*****************************************!*\
  !*** ./src/Components/Common/Themes.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/icons */ "./src/utils/icons.js");


const Themes = ({
  attributes,
  list,
  textEl,
  desEl,
  featureDesEl,
  badgeTitle,
  link,
  theme5TextSl,
  theme5DesSl,
  theme6BtnTitle,
  theme6DesSl
}) => {
  const {
    themes,
    themeOptions,
    iconUploadButton
  } = attributes;
  const {
    rightIconColor,
    isBadge,
    isUrlIcon,
    isButton
  } = themeOptions;
  const {
    setIconUpload
  } = iconUploadButton;
  const {
    theme
  } = themes;
  const {
    icon,
    uploadIconUrl
  } = list;
  const iconEl = icon?.class && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: `icon ${icon?.class}`
  });
  const theme3IconEl = icon?.class && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: `theme3Icon ${icon?.class}`
  });
  const theme5IconEl = icon?.class && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: `theme5Icon ${icon?.class}`
  });
  const theme6IconEl = icon?.class && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: `theme6Icon ${icon?.class}`
  });
  const theme7IconEl = icon?.class && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: `theme7Icon ${icon?.class}`
  });
  switch (theme) {
    case 'theme2':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "icon red"
      }, "select" === setIconUpload && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, iconEl), "upload" === setIconUpload && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: uploadIconUrl,
        alt: ""
      }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "content"
      }, textEl, desEl), isUrlIcon && link ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_icons__WEBPACK_IMPORTED_MODULE_1__.FaExternalLinkAlt, {
        color: rightIconColor
      }) : null);
    case 'theme3':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "feature-container"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "feature"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "icon-wrapper"
      }, "select" === setIconUpload && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, theme3IconEl), "upload" === setIconUpload && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: uploadIconUrl,
        alt: ""
      }))), featureDesEl)));
    case 'theme4':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "icon red"
      }, "select" === setIconUpload && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, iconEl), "upload" === setIconUpload && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: uploadIconUrl,
        alt: ""
      }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "content"
      }, textEl, desEl), isBadge && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
        className: `badge ${!badgeTitle ? 'hidden-badge' : ''}`
      }, badgeTitle), link && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_icons__WEBPACK_IMPORTED_MODULE_1__.FaExternalLinkAlt, {
        color: rightIconColor
      }));
    case 'theme5':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "icon-card-wrapper"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "bg-element bg-element-1"
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "bg-element bg-element-2"
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "icon-card"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "icon-container"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "icon-bg-blur"
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "icon-wrapper"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "icon-pulse"
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "icon-circle"
      }, "select" === setIconUpload && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, theme5IconEl), "upload" === setIconUpload && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: uploadIconUrl,
        alt: ""
      }))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "card-content"
      }, theme5TextSl, theme5DesSl), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "animated-border"
      }))));
    case 'theme6':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "icon-list-container"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
        className: "icon-table"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "icon-container"
      }, "select" === setIconUpload && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, theme6IconEl), "upload" === setIconUpload && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: uploadIconUrl,
        alt: ""
      })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, theme6DesSl), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, isButton && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
        className: "try-button"
      }, theme6BtnTitle)))))));
    case 'theme7':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "glass-card"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "glass-content"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "icon-sphere"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "icon-satellite"
      }, "select" === setIconUpload && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, theme7IconEl), "upload" === setIconUpload && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: uploadIconUrl,
        alt: ""
      }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "orbit"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "satellite"
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "satellite"
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "satellite"
      }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "text-content"
      }, theme5TextSl, theme5DesSl), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "hover-line"
      }))));
    default:
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, "select" === setIconUpload && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, iconEl), "upload" === setIconUpload && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: uploadIconUrl,
        alt: ""
      })), textEl);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Themes);

/***/ }),

/***/ "./src/Components/FrontEnd/IconList.js":
/*!*********************************************!*\
  !*** ./src/Components/FrontEnd/IconList.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Common_Themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Common/Themes */ "./src/Components/Common/Themes.js");
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/data */ "./src/utils/data.js");



const IconList = ({
  attributes
}) => {
  const {
    isTitle,
    title,
    isDesc,
    desc,
    lists,
    isListLinkInNewTab,
    position,
    isHeaderSep,
    themes
  } = attributes;
  const {
    theme = 'default'
  } = themes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${_utils_data__WEBPACK_IMPORTED_MODULE_2__.prefix} ${position}`
  }, isTitle || isDesc ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "header"
  }, isTitle && title && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "title",
    dangerouslySetInnerHTML: {
      __html: title
    }
  }), isDesc && desc && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "description",
    dangerouslySetInnerHTML: {
      __html: desc
    }
  }), isHeaderSep && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "separator"
  })) : null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: `lists ${theme}`
  }, lists?.map((list, index) => {
    const {
      text,
      link,
      des,
      badgeTitle,
      theme6BtnTitle
    } = list;
    const textEl = 'theme2' === theme ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
      className: "text",
      dangerouslySetInnerHTML: {
        __html: text
      }
    }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "text",
      dangerouslySetInnerHTML: {
        __html: text
      }
    });
    const desEl = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "description",
      dangerouslySetInnerHTML: {
        __html: des
      }
    });
    const featureDesEl = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "featureDescription",
      dangerouslySetInnerHTML: {
        __html: text
      }
    });
    const theme5TextSl = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
      className: "card-title",
      dangerouslySetInnerHTML: {
        __html: text
      }
    });
    const theme5DesSl = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "card-description",
      dangerouslySetInnerHTML: {
        __html: des
      }
    });
    const theme6DesSl = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "theme6Des",
      dangerouslySetInnerHTML: {
        __html: des
      }
    });
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(LinkChecker, {
      key: index,
      link,
      isListLinkInNewTab
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: "list"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Common_Themes__WEBPACK_IMPORTED_MODULE_1__["default"], {
      attributes,
      list,
      textEl,
      desEl,
      featureDesEl,
      badgeTitle,
      link,
      theme5TextSl,
      theme5DesSl,
      theme6BtnTitle,
      theme6DesSl
    })));
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconList);
const LinkChecker = ({
  link,
  isListLinkInNewTab,
  children
}) => {
  return link ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: "link",
    href: link,
    target: isListLinkInNewTab ? '_blank' : '_self',
    rel: "noreferrer"
  }, children) : children;
};

/***/ }),

/***/ "./src/utils/data.js":
/*!***************************!*\
  !*** ./src/utils/data.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   prefix: () => (/* binding */ prefix)
/* harmony export */ });
const prefix = 'ilbIconList';

/***/ }),

/***/ "./src/utils/icons.js":
/*!****************************!*\
  !*** ./src/utils/icons.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FaExternalLinkAlt: () => (/* binding */ FaExternalLinkAlt),
/* harmony export */   IoIosArrowForward: () => (/* binding */ IoIosArrowForward),
/* harmony export */   LeftDownArrow: () => (/* binding */ LeftDownArrow),
/* harmony export */   ListIcon: () => (/* binding */ ListIcon),
/* harmony export */   Sparkles: () => (/* binding */ Sparkles),
/* harmony export */   iconListIcon: () => (/* binding */ iconListIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const iconColor = '#4527a4';
const iconListIcon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "512px",
  height: "512px",
  viewBox: "0 0 512 512"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: iconColor,
  d: "M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416 176H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"
}));
function IoIosArrowForward(props) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: 0,
    viewBox: "0 0 512 512",
    height: "1.5em",
    width: "1.5em",
    ...props
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"
  }));
}
function FaExternalLinkAlt(props) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: 0,
    viewBox: "0 0 512 512",
    height: "1em",
    width: "1em",
    ...props
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"
  }));
}

// list icon

function ListIcon(props) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "lucide lucide-list"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M3 12h.01"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M3 18h.01"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M3 6h.01"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M8 12h13"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M8 18h13"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M8 6h13"
  }));
}

// leftDownArrow

function LeftDownArrow(props) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "lucide lucide-corner-left-down"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("polyline", {
    points: "14 15 9 20 4 15"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M20 4h-7a4 4 0 0 0-4 4v12"
  }));
}

// sparkles icon 

function Sparkles(props) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "lucide lucide-sparkles"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M20 3v4"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M22 5h-4"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M4 17v2"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M5 18H3"
  }));
}

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/react-dom/client.js":
/*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var m = __webpack_require__(/*! react-dom */ "react-dom");
if (false) {} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  exports.createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  exports.hydrateRoot = function(c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = window["ReactDOM"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _Components_Common_Style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/Common/Style */ "./src/Components/Common/Style.js");
/* harmony import */ var _Components_FrontEnd_IconList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/FrontEnd/IconList */ "./src/Components/FrontEnd/IconList.js");






// Icon List block
document.addEventListener('DOMContentLoaded', () => {
  const iconListEls = document.querySelectorAll('.wp-block-ilb-icon-list');
  iconListEls.forEach(iconListEl => {
    const attributes = JSON.parse(iconListEl.dataset.attributes);
    (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(iconListEl).render((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_Common_Style__WEBPACK_IMPORTED_MODULE_3__["default"], {
      attributes: attributes,
      id: iconListEl.id
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_FrontEnd_IconList__WEBPACK_IMPORTED_MODULE_4__["default"], {
      attributes: attributes
    })));
    iconListEl?.removeAttribute('data-attributes');
  });
});
})();

/******/ })()
;
//# sourceMappingURL=view.js.map