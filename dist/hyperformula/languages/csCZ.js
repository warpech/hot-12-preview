(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("hyperformula"));
	else if(typeof define === 'function' && define.amd)
		define(["hyperformula"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("hyperformula")) : factory(root["HyperFormula"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE__1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _ = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @license
 * Copyright (c) 2021 Handsoncode. All rights reserved.
 */
var dictionary = {
  errors: {
    CYCLE: '#CYCLE!',
    DIV_BY_ZERO: '#D??LEN??_NULOU!',
    ERROR: '#ERROR!',
    NA: '#NEN??_K_DISPOZICI',
    NAME: '#N??ZEV?',
    NUM: '#????SLO!',
    REF: '#ODKAZ!',
    SPILL: '#PRESAH!',
    VALUE: '#HODNOTA!'
  },
  functions: {
    FILTER: 'FILTER',
    'ARRAY_CONSTRAIN': 'ARRAY_CONSTRAIN',
    ARRAYFORMULA: 'ARRAYFORMULA',
    ABS: 'ABS',
    ACOS: 'ARCCOS',
    ACOSH: 'ARCCOSH',
    ACOT: 'ACOT',
    ACOTH: 'ACOTH',
    AND: 'A',
    ASIN: 'ARCSIN',
    ASINH: 'ARCSINH',
    ATAN2: 'ARCTG2',
    ATAN: 'ARCTG',
    ATANH: 'ARCTGH',
    AVERAGE: 'PR??M??R',
    AVERAGEA: 'AVERAGEA',
    AVERAGEIF: 'AVERAGEIF',
    BASE: 'BASE',
    BIN2DEC: 'BIN2DEC',
    BIN2HEX: 'BIN2HEX',
    BIN2OCT: 'BIN2OCT',
    BITAND: 'BITAND',
    BITLSHIFT: 'BITLSHIFT',
    BITOR: 'BITOR',
    BITRSHIFT: 'BITRSHIFT',
    BITXOR: 'BITXOR',
    CEILING: 'ZAOKR.NAHORU',
    CHAR: 'ZNAK',
    CHOOSE: 'ZVOLIT',
    CLEAN: 'VY??ISTIT',
    CODE: 'K??D',
    COLUMN: 'SLOUPEC',
    COLUMNS: 'SLOUPCE',
    CONCATENATE: 'CONCATENATE',
    CORREL: 'CORREL',
    COS: 'COS',
    COSH: 'COSH',
    COT: 'COT',
    COTH: 'COTH',
    COUNT: 'PO??ET',
    COUNTA: 'PO??ET2',
    COUNTBLANK: 'COUNTBLANK',
    COUNTIF: 'COUNTIF',
    COUNTIFS: 'COUNTIFS',
    COUNTUNIQUE: 'COUNTUNIQUE',
    CSC: 'CSC',
    CSCH: 'CSCH',
    CUMIPMT: 'CUMIPMT',
    CUMPRINC: 'CUMPRINC',
    DATE: 'DATUM',
    DATEDIF: 'DATEDIF',
    DATEVALUE: 'DATUMHODN',
    DAY: 'DEN',
    DAYS360: 'ROK360',
    DAYS: 'DAYS',
    DB: 'ODPIS.ZRYCH',
    DDB: 'ODPIS.ZRYCH2',
    DEC2BIN: 'DEC2BIN',
    DEC2HEX: 'DEC2HEX',
    DEC2OCT: 'DEC2OCT',
    DECIMAL: 'DECIMAL',
    DEGREES: 'DEGREES',
    DELTA: 'DELTA',
    DOLLARDE: 'DOLLARDE',
    DOLLARFR: 'DOLLARFR',
    EDATE: 'EDATE',
    EFFECT: "EFFECT",
    EOMONTH: 'EOMONTH',
    ERF: 'ERF',
    ERFC: 'ERFC',
    EVEN: 'ZAOKROUHLIT.NA.SUD??',
    EXACT: 'STEJN??',
    EXP: 'EXP',
    FALSE: 'NEPRAVDA',
    FIND: 'NAJ??T',
    FORMULATEXT: 'FORMULATEXT',
    FV: 'BUDHODNOTA',
    FVSCHEDULE: 'FVSCHEDULE',
    HEX2BIN: 'HEX2BIN',
    HEX2DEC: 'HEX2DEC',
    HEX2OCT: 'HEX2OCT',
    HLOOKUP: 'VVYHLEDAT',
    HOUR: 'HODINA',
    IF: 'KDY??',
    IFERROR: 'IFERROR',
    IFNA: 'IFNA',
    INDEX: 'INDEX',
    INT: 'CEL??.????ST',
    INTERVAL: 'INTERVAL',
    IPMT: 'PLATBA.??ROK',
    ISBINARY: 'ISBINARY',
    ISBLANK: 'JE.PR??ZDN??',
    ISERR: 'JE.CHYBA',
    ISERROR: 'JE.CHYBHODN',
    ISEVEN: 'ISEVEN',
    ISFORMULA: 'ISFORMULA',
    ISLOGICAL: 'JE.LOGHODN',
    ISNA: 'JE.NEDEF',
    ISNONTEXT: 'JE.NETEXT',
    ISNUMBER: 'JE.??ISLO',
    ISODD: 'ISODD',
    ISOWEEKNUM: 'ISOWEEKNUM',
    ISPMT: 'ISPMT',
    ISREF: 'JE.ODKAZ',
    ISTEXT: 'JE.TEXT',
    LEFT: 'ZLEVA',
    LEN: 'D??LKA',
    LN: 'LN',
    LOG10: 'LOG',
    LOG: 'LOGZ',
    LOWER: 'MAL??',
    MATCH: 'POZVYHLEDAT',
    MAX: 'MAX',
    MAXA: 'MAXA',
    MAXPOOL: 'MAXPOOL',
    MEDIAN: 'MEDIAN',
    MEDIANPOOL: 'MEDIANPOOL',
    MID: '????ST',
    MIN: 'MIN',
    MINA: 'MINA',
    MINUTE: 'MINUTA',
    MIRR: 'MOD.M??RA.V??NOSNOSTI',
    MMULT: 'SOU??IN.MATIC',
    MOD: 'MOD',
    MONTH: 'M??S??C',
    NA: 'NEDEF',
    NETWORKDAYS: 'NETWORKDAYS',
    'NETWORKDAYS.INTL': 'NETWORKDAYS.INTL',
    NOMINAL: 'NOMINAL',
    NOT: 'NE',
    NOW: 'NYN??',
    NPER: 'PO??ET.OBDOB??',
    NPV: '??IST??.SOU??HODNOTA',
    OCT2BIN: 'OCT2BIN',
    OCT2DEC: 'OCT2DEC',
    OCT2HEX: 'OCT2HEX',
    ODD: 'ZAOKROUHLIT.NA.LICH??',
    OFFSET: 'POSUN',
    OR: 'NEBO',
    PDURATION: 'PDURATION',
    PI: 'PI',
    PMT: 'PLATBA',
    PRODUCT: 'SOU??IN',
    POWER: 'POWER',
    PPMT: 'PLATBA.Z??KLAD',
    PROPER: 'VELK??2',
    PV: 'SOU??HODNOTA',
    RADIANS: 'RADIANS',
    RAND: 'N??H????SLO',
    RATE: '??ROKOV??.M??RA',
    REPLACE: 'NAHRADIT',
    REPT: 'OPAKOVAT',
    RIGHT: 'ZPRAVA',
    ROUND: 'ZAOKROUHLIT',
    ROUNDDOWN: 'ROUNDDOWN',
    ROUNDUP: 'ROUNDUP',
    ROW: '????DEK',
    ROWS: '????DKY',
    RRI: 'RRI',
    SEARCH: 'HLEDAT',
    SEC: 'SEC',
    SECH: 'SECH',
    SECOND: 'SEKUNDA',
    SHEET: 'SHEET',
    SHEETS: 'SHEETS',
    SIN: 'SIN',
    SINH: 'SINH',
    SLN: 'ODPIS.LIN',
    SPLIT: 'SPLIT',
    SQRT: 'ODMOCNINA',
    STDEVA: 'STDEVA',
    'STDEV.P': 'SMODCH.P',
    STDEVPA: 'STDEVPA',
    'STDEV.S': 'SMODCH.V??B??R.S',
    SUBSTITUTE: 'DOSADIT',
    SUBTOTAL: 'SUBTOTAL',
    SUM: 'SUMA',
    SUMIF: 'SUMIF',
    SUMIFS: 'SUMIFS',
    SUMPRODUCT: 'SOU??IN.SKAL??RN??',
    SUMSQ: 'SUMA.??TVERC??',
    SWITCH: '',
    SYD: 'ODPIS.NELIN',
    T: 'T',
    TAN: 'TG',
    TANH: 'TGH',
    TBILLEQ: 'TBILLEQ',
    TBILLPRICE: 'TBILLPRICE',
    TBILLYIELD: 'TBILLYIELD',
    TEXT: 'HODNOTA.NA.TEXT',
    TIME: '??AS',
    TIMEVALUE: '??ASHODN',
    TODAY: 'DNES',
    TRANSPOSE: 'TRANSPOZICE',
    TRIM: 'PRO??ISTIT',
    TRUE: 'PRAVDA',
    TRUNC: 'USEKNOUT',
    UNICHAR: 'UNICHAR',
    UNICODE: 'UNICODE',
    UPPER: 'VELK??',
    VARA: 'VARA',
    'VAR.P': 'VAR.P',
    VARPA: 'VARPA',
    'VAR.S': 'VAR.S',
    VLOOKUP: 'SVYHLEDAT',
    WEEKDAY: 'DENT??DNE',
    WEEKNUM: 'WEEKNUM',
    WORKDAY: 'WORKDAY',
    'WORKDAY.INTL': 'WORKDAY.INTL',
    XNPV: 'XNPV',
    XOR: 'XOR',
    YEAR: 'ROK',
    YEARFRAC: 'YEARFRAC',
    ROMAN: 'ROMAN',
    ARABIC: 'ARABIC',
    'HF.ADD': 'HF.ADD',
    'HF.CONCAT': 'HF.CONCAT',
    'HF.DIVIDE': 'HF.DIVIDE',
    'HF.EQ': 'HF.EQ',
    'HF.GT': 'HF.GT',
    'HF.GTE': 'HF.GTE',
    'HF.LT': 'HF.LT',
    'HF.LTE': 'HF.LTE',
    'HF.MINUS': 'HF.MINUS',
    'HF.MULTIPLY': 'HF.MULTIPLY',
    'HF.NE': 'HF.NE',
    'HF.POW': 'HF.POW',
    'HF.UMINUS': 'HF.UMINUS',
    'HF.UNARY_PERCENT': 'HF.UNARY_PERCENT',
    'HF.UPLUS': 'HF.UPLUS',
    VAR: 'VAR.V??B??R',
    VARP: 'VAR',
    STDEV: 'SMODCH.V??B??R',
    STDEVP: 'SMODCH',
    FACT: 'FAKTORI??L',
    FACTDOUBLE: 'FACTDOUBLE',
    COMBIN: 'KOMBINACE',
    COMBINA: 'COMBINA',
    GCD: 'GCD',
    LCM: 'LCM',
    MROUND: 'MROUND',
    MULTINOMIAL: 'MULTINOMIAL',
    QUOTIENT: 'QUOTIENT',
    RANDBETWEEN: 'RANDBETWEEN',
    SERIESSUM: 'SERIESSUM',
    SIGN: 'SIGN',
    SQRTPI: 'SQRTPI',
    SUMX2MY2: 'SUMX2MY2',
    SUMX2PY2: 'SUMX2PY2',
    SUMXMY2: 'SUMXMY2',
    'EXPON.DIST': 'EXPON.DIST',
    EXPONDIST: 'EXPONDIST',
    FISHER: 'FISHER',
    FISHERINV: 'FISHERINV',
    GAMMA: 'GAMMA',
    'GAMMA.DIST': 'GAMMA.DIST',
    'GAMMA.INV': 'GAMMA.INV',
    GAMMADIST: 'GAMMADIST',
    GAMMAINV: 'GAMMAINV',
    GAMMALN: 'GAMMALN',
    'GAMMALN.PRECISE': 'GAMMALN.PRECISE',
    GAUSS: 'GAUSS',
    'BETA.DIST': 'BETA.DIST',
    BETADIST: 'BETADIST',
    'BETA.INV': 'BETA.INV',
    BETAINV: 'BETAINV',
    'BINOM.DIST': 'BINOM.DIST',
    BINOMDIST: 'BINOMDIST',
    'BINOM.INV': 'BINOM.INV',
    BESSELI: 'BESSELI',
    BESSELJ: 'BESSELJ',
    BESSELK: 'BESSELK',
    BESSELY: 'BESSELY',
    CHIDIST: 'CHIDIST',
    CHIINV: 'CHIINV',
    'CHISQ.DIST': 'CHISQ.DIST',
    'CHISQ.DIST.RT': 'CHISQ.DIST.RT',
    'CHISQ.INV': 'CHISQ.INV',
    'CHISQ.INV.RT': 'CHISQ.INV.RT',
    'F.DIST': 'F.DIST',
    'F.DIST.RT': 'F.DIST.RT',
    'F.INV': 'F.INV',
    'F.INV.RT': 'F.INV.RT',
    FDIST: 'FDIST',
    FINV: 'FINV',
    WEIBULL: 'WEIBULL',
    'WEIBULL.DIST': 'WEIBULL.DIST',
    POISSON: 'POISSON',
    'POISSON.DIST': 'POISSON.DIST',
    'HYPGEOM.DIST': 'HYPGEOM.DIST',
    HYPGEOMDIST: 'HYPGEOMDIST',
    'T.DIST': 'T.DIST',
    'T.DIST.2T': 'T.DIST.2T',
    'T.DIST.RT': 'T.DIST.RT',
    'T.INV': 'T.INV',
    'T.INV.2T': 'T.INV.2T',
    TDIST: 'TDIST',
    TINV: 'TINV',
    LOGINV: 'LOGINV',
    'LOGNORM.DIST': 'LOGNORM.DIST',
    'LOGNORM.INV': 'LOGNORM.INV',
    LOGNORMDIST: 'LOGNORMDIST',
    'NORM.DIST': 'NORM.DIST',
    'NORM.INV': 'NORM.INV',
    'NORM.S.DIST': 'NORM.S.DIST',
    'NORM.S.INV': 'NORM.S.INV',
    NORMDIST: 'NORMDIST',
    NORMINV: 'NORMINV',
    NORMSDIST: 'NORMSDIST',
    NORMSINV: 'NORMSINV',
    PHI: 'PHI',
    'NEGBINOM.DIST': 'NEGBINOM.DIST',
    NEGBINOMDIST: 'NEGBINOMDIST',
    COMPLEX: 'COMPLEX',
    IMABS: 'IMABS',
    IMAGINARY: 'IMAGINARY',
    IMARGUMENT: 'IMARGUMENT',
    IMCONJUGATE: 'IMCONJUGATE',
    IMCOS: 'IMCOS',
    IMCOSH: 'IMCOSH',
    IMCOT: 'IMCOT',
    IMCSC: 'IMCSC',
    IMCSCH: 'IMCSCH',
    IMDIV: 'IMDIV',
    IMEXP: 'IMEXP',
    IMLN: 'IMLN',
    IMLOG10: 'IMLOG10',
    IMLOG2: 'IMLOG2',
    IMPOWER: 'IMPOWER',
    IMPRODUCT: 'IMPRODUCT',
    IMREAL: 'IMREAL',
    IMSEC: 'IMSEC',
    IMSECH: 'IMSECH',
    IMSIN: 'IMSIN',
    IMSINH: 'IMSINH',
    IMSQRT: 'IMSQRT',
    IMSUB: 'IMSUB',
    IMSUM: 'IMSUM',
    IMTAN: 'IMTAN',
    LARGE: 'LARGE',
    SMALL: 'SMALL',
    AVEDEV: 'PR??MODCHYLKA',
    CONFIDENCE: 'CONFIDENCE',
    'CONFIDENCE.NORM': 'CONFIDENCE.NORM',
    'CONFIDENCE.T': 'CONFIDENCE.T',
    DEVSQ: 'DEVSQ',
    GEOMEAN: 'GEOMEAN',
    HARMEAN: 'HARMEAN',
    CRITBINOM: 'CRITBINOM',
    PEARSON: 'PEARSON',
    RSQ: 'RKQ',
    STANDARDIZE: 'STANDARDIZE',
    'Z.TEST': 'Z.TEST',
    ZTEST: 'ZTEST',
    'F.TEST': 'F.TEST',
    FTEST: 'FTEST',
    STEYX: 'STEYX',
    SLOPE: 'SLOPE',
    COVAR: 'COVAR',
    'COVARIANCE.P': 'COVARIANCE.P',
    'COVARIANCE.S': 'COVARIANCE.S',
    'CHISQ.TEST': 'CHISQ.TEST',
    CHITEST: 'CHITEST',
    'T.TEST': 'T.TEST',
    TTEST: 'TTEST',
    SKEW: 'SKEW',
    'SKEW.P': 'SKEW.P',
    WEIBULLDIST: 'WEIBULLDIST',
    VARS: 'VARS',
    TINV2T: 'TINV2T',
    TDISTRT: 'TDISTRT',
    TDIST2T: 'TDIST2T',
    STDEVS: 'STDEVS',
    FINVRT: 'FINVRT',
    FDISTRT: 'FDISTRT',
    CHIDISTRT: 'CHIDISTRT',
    CHIINVRT: 'CHIINVRT',
    COVARIANCEP: 'COVARIANCEP',
    COVARIANCES: 'COVARIANCES',
    LOGNORMINV: 'LOGNORMINV',
    POISSONDIST: 'POISSONDIST',
    SKEWP: 'SKEWP',
    'CEILING.MATH': 'CEILING.MATH',
    FLOOR: 'ZAOKR.DOL??',
    'FLOOR.MATH': 'FLOOR.MATH',
    'CEILING.PRECISE': 'CEILING.PRECISE',
    'FLOOR.PRECISE': 'FLOOR.PRECISE',
    'ISO.CEILING': 'ISO.CEILING'
  },
  langCode: 'csCZ',
  ui: {
    NEW_SHEET_PREFIX: 'Sheet'
  }
};

if (!_.default.languages) {
  _.default.languages = {};
}

_.default.languages[dictionary.langCode] = dictionary;
var _default = dictionary;
exports.default = _default;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ })
/******/ ])["___"];
});