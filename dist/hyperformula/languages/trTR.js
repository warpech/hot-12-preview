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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),

/***/ 17:
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
    DIV_BY_ZERO: '#SAYI/0!',
    ERROR: '#ERROR!',
    NA: '#YOK',
    NAME: '#AD?',
    NUM: '#SAYI!',
    REF: '#BA??V!',
    SPILL: '#TA??MA!',
    VALUE: '#DE??ER!'
  },
  functions: {
    FILTER: 'FILTER',
    'ARRAY_CONSTRAIN': 'ARRAY_CONSTRAIN',
    ARRAYFORMULA: 'ARRAYFORMULA',
    ABS: 'MUTLAK',
    ACOS: 'ACOS',
    ACOSH: 'ACOSH',
    ACOT: 'ACOT',
    ACOTH: 'ACOTH',
    AND: 'VE',
    ASIN: 'AS??N',
    ASINH: 'AS??NH',
    ATAN2: 'ATAN2',
    ATAN: 'ATAN',
    ATANH: 'ATANH',
    AVERAGE: 'ORTALAMA',
    AVERAGEA: 'ORTALAMAA',
    AVERAGEIF: 'E??ERORTALAMA',
    BASE: 'TABAN',
    BIN2DEC: 'BIN2DEC',
    BIN2HEX: 'BIN2HEX',
    BIN2OCT: 'BIN2OCT',
    BITAND: 'B??TVE',
    BITLSHIFT: 'B??TSOLAKAYDIR',
    BITOR: 'B??TVEYA',
    BITRSHIFT: 'B??TSA??AKAYDIR',
    BITXOR: 'B??T??ZELVEYA',
    CEILING: 'TAVANAYUVARLA',
    CHAR: 'DAMGA',
    CHOOSE: 'ELEMAN',
    CLEAN: 'TEM??Z',
    CODE: 'KOD',
    COLUMN: 'S??TUN',
    COLUMNS: 'S??TUNSAY',
    CONCATENATE: 'B??RLE??T??R',
    CORREL: 'KORELASYON',
    COS: 'COS',
    COSH: 'COSH',
    COT: 'COT',
    COTH: 'COTH',
    COUNT: 'SAY',
    COUNTA: 'BA??_DE??_DOLU_SAY',
    COUNTBLANK: 'BO??LUKSAY',
    COUNTIF: 'E??ERSAY',
    COUNTIFS: '??OKE??ERSAY',
    COUNTUNIQUE: 'COUNTUNIQUE',
    CSC: 'CSC',
    CSCH: 'CSCH',
    CUMIPMT: 'TOP??DENENFA??Z',
    CUMPRINC: 'TOPANAPARA',
    DATE: 'TAR??H',
    DATEDIF: 'DATEDIF',
    DATEVALUE: 'TAR??HSAYISI',
    DAY: 'G??N',
    DAYS360: 'G??N360',
    DAYS: 'G??NSAY',
    DB: 'AZALANBAK??YE',
    DDB: '????FTAZALANBAK??YE',
    DEC2BIN: 'DEC2BIN',
    DEC2HEX: 'DEC2HEX',
    DEC2OCT: 'DEC2OCT',
    DECIMAL: 'ONDALIK',
    DEGREES: 'DERECE',
    DELTA: 'DELTA',
    DOLLARDE: 'L??RAON',
    DOLLARFR: 'L??RAKES',
    EDATE: 'SER??TAR??H',
    EFFECT: "ETK??N",
    EOMONTH: 'SER??AY',
    ERF: 'HATA????LEV',
    ERFC: 'T??MHATA????LEV',
    EVEN: '????FT',
    EXACT: '??ZDE??',
    EXP: '??S',
    FALSE: 'YANLI??',
    FIND: 'BUL',
    FORMULATEXT: 'FORM??LMETN??',
    FV: 'GD',
    FVSCHEDULE: 'GDPROGRAM',
    HEX2BIN: 'HEX2BIN',
    HEX2DEC: 'HEX2DEC',
    HEX2OCT: 'HEX2OCT',
    HLOOKUP: 'YATAYARA',
    HOUR: 'SAAT',
    IF: 'E??ER',
    IFERROR: 'E??ERHATA',
    IFNA: 'E??ERYOKSA',
    INDEX: '??ND??S',
    INT: 'TAMSAYI',
    INTERVAL: 'INTERVAL',
    IPMT: 'FA??ZTUTARI',
    ISBINARY: 'ISBINARY',
    ISBLANK: 'EBO??SA',
    ISERR: 'EHATA',
    ISERROR: 'EHATALIYSA',
    ISEVEN: '????FTM??',
    ISFORMULA: 'EFORM??LSE',
    ISLOGICAL: 'EMANTIKSALSA',
    ISNA: 'EYOKSA',
    ISNONTEXT: 'EMET??NDE????LSE',
    ISNUMBER: 'ESAYIYSA',
    ISODD: 'TEKM??',
    ISOWEEKNUM: 'ISOHAFTASAY',
    ISPMT: 'ISPMT',
    ISREF: 'EREFSE',
    ISTEXT: 'EMET??NSE',
    LEFT: 'SOL',
    LEN: 'UZUNLUK',
    LN: 'LN',
    LOG10: 'LOG10',
    LOG: 'LOG',
    LOWER: 'K??????KHARF',
    MATCH: 'KA??INCI',
    MAX: 'MAK',
    MAXA: 'MAKA',
    MAXPOOL: 'MAXPOOL',
    MEDIAN: 'ORTANCA',
    MEDIANPOOL: 'MEDIANPOOL',
    MID: 'PAR??AAL',
    MIN: 'M??N',
    MINA: 'M??NA',
    MINUTE: 'DAK??KA',
    MIRR: 'D_????_VER??M_ORANI',
    MMULT: 'D??ARP',
    MOD: 'MOD',
    MONTH: 'AY',
    NA: 'YOKSAY',
    NETWORKDAYS: 'TAM????G??N??',
    'NETWORKDAYS.INTL': 'TAM????G??N??.ULUSL',
    NOMINAL: 'NOM??NAL',
    NOT: 'DE????L',
    NOW: '????MD??',
    NPER: 'TAKS??T_SAYISI',
    NPV: 'NBD',
    OCT2BIN: 'OCT2BIN',
    OCT2DEC: 'OCT2DEC',
    OCT2HEX: 'OCT2HEX',
    ODD: 'TEK',
    OFFSET: 'KAYDIR',
    OR: 'VEYA',
    PDURATION: 'PS??RE',
    PI: 'P??',
    PMT: 'DEVRESEL_??DEME',
    PRODUCT: '??ARPIM',
    POWER: 'KUVVET',
    PPMT: 'ANA_PARA_??DEMES??',
    PROPER: 'YAZIM.D??ZEN??',
    PV: 'BD',
    RADIANS: 'RADYAN',
    RAND: 'S_SAYI_??RET',
    RATE: 'FA??Z_ORANI',
    REPLACE: 'DE??????T??R',
    REPT: 'Y??NELE',
    RIGHT: 'SA??',
    ROUND: 'YUVARLA',
    ROUNDDOWN: 'A??A??IYUVARLA',
    ROUNDUP: 'YUKARIYUVARLA',
    ROW: 'SAT',
    ROWS: 'SATIRSAY',
    RRI: 'GER??EKLE??ENYATIRIMGET??R??S??',
    SEARCH: 'MBUL',
    SEC: 'SEC',
    SECH: 'SECH',
    SECOND: 'SAN??YE',
    SHEET: 'SAYFA',
    SHEETS: 'SAYFALAR',
    SIN: 'S??N',
    SINH: 'SINH',
    SLN: 'DA',
    SPLIT: 'SPLIT',
    SQRT: 'KAREK??K',
    STDEVA: 'STDSAPMAA',
    'STDEV.P': 'STDSAPMA.P',
    STDEVPA: 'STDSAPMASA',
    'STDEV.S': 'STDSAPMA.S',
    SUBSTITUTE: 'YER??NEKOY',
    SUBTOTAL: 'ALTTOPLAM   SUMY.CZ????CIOWE',
    SUM: 'TOPLA',
    SUMIF: 'ETOPLA',
    SUMIFS: '??OKETOPLA',
    SUMPRODUCT: 'TOPLA.??ARPIM',
    SUMSQ: 'TOPKARE',
    SWITCH: '',
    SYD: 'YAT',
    T: 'T',
    TAN: 'TAN',
    TANH: 'TANH',
    TBILLEQ: 'HTAHE??',
    TBILLPRICE: 'HTAHDE??ER',
    TBILLYIELD: 'HTAH??DEME',
    TEXT: 'METNE??EV??R',
    TIME: 'ZAMAN',
    TIMEVALUE: 'ZAMANSAYISI',
    TODAY: 'BUG??N',
    TRANSPOSE: 'DEVR??K_D??N??????M',
    TRIM: 'KIRP',
    TRUE: 'DO??RU',
    TRUNC: 'NSAT',
    UNICHAR: 'UNICODEKARAKTER??',
    UNICODE: 'UNICODE',
    UPPER: 'B??Y??KHARF',
    VARA: 'VARA',
    'VAR.P': 'VAR.P',
    VARPA: 'VARSA',
    'VAR.S': 'VAR.S',
    VLOOKUP: 'D????EYARA',
    WEEKDAY: 'HAFTANING??N??',
    WEEKNUM: 'HAFTASAY',
    WORKDAY: '????G??N??',
    'WORKDAY.INTL': '????G??N??.ULUSL',
    XNPV: 'ANBD',
    XOR: '??ZELVEYA',
    YEAR: 'YIL',
    YEARFRAC: 'YILORAN',
    ROMAN: 'ROMEN',
    ARABIC: 'ARAP??A',
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
    VAR: 'VAR',
    VARP: 'VARS',
    STDEV: 'STDSAPMA',
    STDEVP: 'STDSAPMAS',
    FACT: '??ARPINIM',
    FACTDOUBLE: '????FTFAKT??R',
    COMBIN: 'KOMB??NASYON',
    COMBINA: 'KOMB??NASYONA',
    GCD: 'OBEB',
    LCM: 'OKEK',
    MROUND: 'KYUVARLA',
    MULTINOMIAL: '??OKTER??ML??',
    QUOTIENT: 'B??L??M',
    RANDBETWEEN: 'RASTGELEARADA',
    SERIESSUM: 'SER??TOPLA',
    SIGN: '????ARET',
    SQRTPI: 'KAREK??KP??',
    SUMX2MY2: 'TOPX2EY2',
    SUMX2PY2: 'TOPX2AY2',
    SUMXMY2: 'TOPXEY2',
    'EXPON.DIST': '??STEL.DA??',
    EXPONDIST: '??STELDA??',
    FISHER: 'FISHER',
    FISHERINV: 'FISHERTERS',
    GAMMA: 'GAMA',
    'GAMMA.DIST': 'GAMA.DA??',
    'GAMMA.INV': 'GAMA.TERS',
    GAMMADIST: 'GAMADA??',
    GAMMAINV: 'GAMATERS',
    GAMMALN: 'GAMALN',
    'GAMMALN.PRECISE': 'GAMALN.DUYARLI',
    GAUSS: 'GAUSS',
    'BETA.DIST': 'BETA.DA??',
    BETADIST: 'BETADA??',
    'BETA.INV': 'BETA.TERS',
    BETAINV: 'BETATERS',
    'BINOM.DIST': 'B??NOM.DA??',
    BINOMDIST: 'B??NOMDA??',
    'BINOM.INV': 'B??NOM.TERS',
    BESSELI: 'BESSELI',
    BESSELJ: 'BESSELJ',
    BESSELK: 'BESSELK',
    BESSELY: 'BESSELY',
    CHIDIST: 'K??KAREDA??',
    CHIINV: 'K??KARETERS',
    'CHISQ.DIST': 'K??KARE.DA??',
    'CHISQ.DIST.RT': 'K??KARE.DA??.SA??K',
    'CHISQ.INV': 'K??KARE.TERS',
    'CHISQ.INV.RT': 'K??KARE.TERS.SA??K',
    'F.DIST': 'F.DA??',
    'F.DIST.RT': 'F.DA??.SA??K',
    'F.INV': 'F.TERS',
    'F.INV.RT': 'F.TERS.SA??K',
    FDIST: 'FDA??',
    FINV: 'FTERS',
    WEIBULL: 'WEIBULL',
    'WEIBULL.DIST': 'WEIBULL.DA??',
    POISSON: 'POISSON',
    'POISSON.DIST': 'POISSON.DA??',
    'HYPGEOM.DIST': 'H??PERGEOM.DA??',
    HYPGEOMDIST: 'H??PERGEOMDA??',
    'T.DIST': 'T.DA??',
    'T.DIST.2T': 'T.DA??.2K',
    'T.DIST.RT': 'T.DA??.SA??K',
    'T.INV': 'T.TERS',
    'T.INV.2T': 'T.TERS.2K',
    TDIST: 'TDA??',
    TINV: 'TTERS',
    LOGINV: 'LOGTERS',
    'LOGNORM.DIST': 'LOGNORM.DA??',
    'LOGNORM.INV': 'LOGNORM.TERS',
    LOGNORMDIST: 'LOGNORMDA??',
    'NORM.DIST': 'NORM.DA??',
    PHI: 'PHI',
    'NORM.INV': 'NORM.TERS',
    'NORM.S.DIST': 'NORM.S.DA??',
    'NORM.S.INV': 'NORM.S.TERS',
    NORMDIST: 'NORMDA??',
    NORMINV: 'NORMTERS',
    NORMSDIST: 'NORMSDA??',
    NORMSINV: 'NORMSTERS',
    'NEGBINOM.DIST': 'NEGB??NOM.DA??',
    NEGBINOMDIST: 'NEGB??NOMDA??',
    COMPLEX: 'KARMA??IK',
    IMABS: 'SANMUTLAK',
    IMAGINARY: 'SANAL',
    IMARGUMENT: 'SANBA??_DE??????KEN',
    IMCONJUGATE: 'SANE??LENEK',
    IMCOS: 'SANCOS',
    IMCOSH: 'SANCOSH',
    IMCOT: 'SANCOT',
    IMCSC: 'SANCSC',
    IMCSCH: 'SANCSCH',
    IMDIV: 'SANB??L',
    IMEXP: 'SAN??S',
    IMLN: 'SANLN',
    IMLOG10: 'SANLOG10',
    IMLOG2: 'SANLOG2',
    IMPOWER: 'SANKUVVET',
    IMPRODUCT: 'SAN??ARP',
    IMREAL: 'SANGER??EK',
    IMSEC: 'SANSEC',
    IMSECH: 'SANSECH',
    IMSIN: 'SANSIN',
    IMSINH: 'SANSINH',
    IMSQRT: 'SANKAREK??K',
    IMSUB: 'SANTOPLA',
    IMSUM: 'SAN??IKAR',
    IMTAN: 'SANTAN',
    LARGE: 'B??Y??K',
    SMALL: 'K??????K',
    AVEDEV: 'ORTSAP',
    CONFIDENCE: 'G??VEN??RL??K',
    'CONFIDENCE.NORM': 'G??VEN??L??RL??K.NORM',
    'CONFIDENCE.T': 'G??VEN??L??RL??K.T',
    DEVSQ: 'SAPKARE',
    GEOMEAN: 'GEOORT',
    HARMEAN: 'HARORT',
    CRITBINOM: 'KR??T??KB??NOM',
    PEARSON: 'PEARSON',
    RSQ: 'RKARE',
    STANDARDIZE: 'STANDARTLA??TIRMA',
    'Z.TEST': 'Z.TEST',
    ZTEST: 'ZTEST',
    'F.TEST': 'F.TEST',
    FTEST: 'FTEST',
    STEYX: 'STHYX',
    SLOPE: 'E????M',
    COVAR: 'KOVARYANS',
    'COVARIANCE.P': 'KOVARYANS.P',
    'COVARIANCE.S': 'KOVARYANS.S',
    'CHISQ.TEST': 'K??KARE.TEST',
    CHITEST: 'K??KARETEST',
    'T.TEST': 'T.TEST',
    TTEST: 'TTEST',
    SKEW: '??ARPIKLIK',
    'SKEW.P': '??ARPIKLIK.P',
    WEIBULLDIST: 'WEIBULLDIST',
    VARS: '_VARS',
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
    'CEILING.MATH': 'TAVANAYUVARLA.MATEMAT??K',
    FLOOR: 'TABANAYUVARLA',
    'FLOOR.MATH': 'TABANAYUVARLA.MATEMAT??K',
    'CEILING.PRECISE': 'CEILING.PRECISE',
    'FLOOR.PRECISE': 'FLOOR.PRECISE',
    'ISO.CEILING': 'ISO.CEILING'
  },
  langCode: 'trTR',
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

/***/ })

/******/ })["___"];
});