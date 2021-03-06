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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),

/***/ 8:
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
    DIV_BY_ZERO: '#Z??R??OSZT??!',
    ERROR: '#ERROR!',
    NA: '#HI??NYZIK',
    NAME: '#N??V?',
    NUM: '#SZ??M!',
    REF: '#HIV!',
    SPILL: '#KIBONT??S!',
    VALUE: '#??RT??K!'
  },
  functions: {
    FILTER: 'FILTER',
    'ARRAY_CONSTRAIN': 'ARRAY_CONSTRAIN',
    ARRAYFORMULA: 'ARRAYFORMULA',
    ABS: 'ABS',
    ACOS: 'ARCCOS',
    ACOSH: 'ARCCOSH',
    ACOT: 'ARCCOT',
    ACOTH: 'ARCCOTH',
    AND: '??S',
    ASIN: 'ARCSIN',
    ASINH: 'ARCSINH',
    ATAN2: 'ARCTAN2',
    ATAN: 'ARCTAN',
    ATANH: 'ARCTANH',
    AVERAGE: '??TLAG',
    AVERAGEA: '??TLAGA',
    AVERAGEIF: '??TLAGHA',
    BASE: 'ALAP',
    BIN2DEC: 'BIN.DEC',
    BIN2HEX: 'BIN.HEX',
    BIN2OCT: 'BIN.OKT',
    BITAND: 'BIT.??S',
    BITLSHIFT: 'BIT.BAL.ELTOL',
    BITOR: 'BIT.VAGY',
    BITRSHIFT: 'BIT.JOBB.ELTOL',
    BITXOR: 'BIT.XVAGY',
    CEILING: 'PLAFON',
    CHAR: 'KARAKTER',
    CHOOSE: 'V??LASZT',
    CLEAN: 'TISZT??T',
    CODE: 'K??D',
    COLUMN: 'OSZLOP',
    COLUMNS: 'OSZLOPOK',
    CONCATENATE: '??SSZEF??Z',
    CORREL: 'KORREL',
    COS: 'COS',
    COSH: 'COSH',
    COT: 'COT',
    COTH: 'COTH',
    COUNT: 'DARAB',
    COUNTA: 'DARAB2',
    COUNTBLANK: 'DARAB??RES',
    COUNTIF: 'DARABTELI',
    COUNTIFS: 'DARABHAT??BB',
    COUNTUNIQUE: 'COUNTUNIQUE',
    CSC: 'CSC',
    CSCH: 'CSCH',
    CUMIPMT: '??SSZES.KAMAT',
    CUMPRINC: '??SSZES.T??KER??SZ',
    DATE: 'D??TUM',
    DATEDIF: 'DATEDIF',
    DATEVALUE: 'D??TUM??RT??K',
    DAY: 'NAP',
    DAYS360: 'DAYS360',
    DAYS: 'NAPOK',
    DB: 'DB',
    DDB: 'KCSA',
    DEC2BIN: 'DEC.BIN',
    DEC2HEX: 'DEC.HEX',
    DEC2OCT: 'DEC.OKT',
    DECIMAL: 'TIZEDES',
    DEGREES: 'FOK',
    DELTA: 'DELTA',
    DOLLARDE: 'FORINT.DEC',
    DOLLARFR: 'FORINT.T??RT',
    EDATE: 'KALK.D??TUM',
    EFFECT: "T??NYLEGES",
    EOMONTH: 'H??NAP.UTOLS??.NAP',
    ERF: 'HIBAF',
    ERFC: 'HIBAF.KOMPLEMENTER',
    EVEN: 'P??ROS',
    EXACT: 'AZONOS',
    EXP: 'KITEV??',
    FALSE: 'HAMIS',
    FIND: 'SZ??VEG.TAL??L',
    FORMULATEXT: 'K??PLETSZ??VEG',
    FV: 'JB??',
    FVSCHEDULE: 'KJ??',
    HEX2BIN: 'HEX.BIN',
    HEX2DEC: 'HEX.DEC',
    HEX2OCT: 'HEX.OKT',
    HLOOKUP: 'VKERES',
    HOUR: '??RA',
    IF: 'HA',
    IFERROR: 'HAHIBA',
    IFNA: 'HAHI??NYZIK',
    INDEX: 'INDEX',
    INT: 'INT',
    INTERVAL: 'INTERVAL',
    IPMT: 'RR??SZLET',
    ISBINARY: 'ISBINARY',
    ISBLANK: '??RES',
    ISERR: 'HIBA.E',
    ISERROR: 'HIB??S',
    ISEVEN: 'P??ROSE',
    ISFORMULA: 'K??PLET',
    ISLOGICAL: 'LOGIKAI',
    ISNA: 'NINCS',
    ISNONTEXT: 'NEM.SZ??VEG',
    ISNUMBER: 'SZ??M',
    ISODD: 'P??RATLANE',
    ISOWEEKNUM: 'ISO.H??T.SZ??MA',
    ISPMT: 'LR??SZLETKAMAT',
    ISREF: 'HIVATKOZ??S',
    ISTEXT: 'SZ??VEG.E',
    LEFT: 'BAL',
    LEN: 'HOSSZ',
    LN: 'LN',
    LOG10: 'LOG10',
    LOG: 'LOG',
    LOWER: 'KISBET??',
    MATCH: 'HOL.VAN',
    MAX: 'MAX',
    MAXA: 'MAXA',
    MAXPOOL: 'MAXPOOL',
    MEDIAN: 'MEDI??N',
    MEDIANPOOL: 'MEDIANPOOL',
    MID: 'K??Z??P',
    MIN: 'MIN',
    MINA: 'MINA',
    MINUTE: 'PERCEK',
    MIRR: 'MEGT??R??L??S',
    MMULT: 'MSZORZAT',
    MOD: 'MARAD??K',
    MONTH: 'H??NAP',
    NA: 'HI??NYZIK',
    NETWORKDAYS: '??SSZ.MUNKANAP',
    'NETWORKDAYS.INTL': '??SSZ.MUNKANAP.INTL',
    NOMINAL: 'N??VLEGES',
    NOT: 'NEM',
    NOW: 'MOST',
    NPER: 'PER.SZ??M',
    NPV: 'NM??',
    OCT2BIN: 'OKT.BIN',
    OCT2DEC: 'OKT.DEC',
    OCT2HEX: 'OKT.HEX',
    ODD: 'P??RATLAN',
    OFFSET: 'ELTOL??S',
    OR: 'VAGY',
    PDURATION: 'KAMAT??RZ.PER',
    PI: 'PI',
    PMT: 'R??SZLET',
    PRODUCT: 'SZORZAT',
    POWER: 'HATV??NY',
    PPMT: 'PR??SZLET',
    PROPER: 'TN??V',
    PV: 'M??',
    RADIANS: 'RADI??N',
    RAND: 'V??L',
    RATE: 'R??TA',
    REPLACE: 'CSERE',
    REPT: 'SOKSZOR',
    RIGHT: 'JOBB',
    ROUND: 'KEREK??T??S',
    ROUNDDOWN: 'KEREK.LE',
    ROUNDUP: 'KEREK.FEL',
    ROW: 'SOR',
    ROWS: 'SOROK',
    RRI: 'MR',
    SEARCH: 'SZ??VEG.KERES',
    SEC: 'SEC',
    SECH: 'SECH',
    SECOND: 'MPERC',
    SHEET: 'LAP',
    SHEETS: 'LAPOK',
    SIN: 'SIN',
    SINH: 'SINH',
    SLN: 'LCSA',
    SPLIT: 'SPLIT',
    SQRT: 'GY??K',
    STDEVA: 'SZ??R??SA',
    'STDEV.P': 'SZ??R.S',
    STDEVPA: 'SZ??R??SPA',
    'STDEV.S': 'SZ??R.M',
    SUBSTITUTE: 'HELYETTE',
    SUBTOTAL: 'R??SZ??SSZEG',
    SUM: 'SZUM',
    SUMIF: 'SZUMHA',
    SUMIFS: 'SZUMHAT??BB',
    SUMPRODUCT: 'SZORZAT??SSZEG',
    SUMSQ: 'N??GYZET??SSZEG',
    SWITCH: '',
    SYD: '??SZ??',
    T: 'T',
    TAN: 'TAN',
    TANH: 'TANH',
    TBILLEQ: 'KJEGY.EGYEN??RT',
    TBILLPRICE: 'KJEGY.??R',
    TBILLYIELD: 'KJEGY.HOZAM',
    TEXT: 'SZ??VEG',
    TIME: 'ID??',
    TIMEVALUE: 'ID????RT??K',
    TODAY: 'MA',
    TRANSPOSE: 'TRANSZPON??L??S',
    TRIM: 'KIMETSZ',
    TRUE: 'IGAZ',
    TRUNC: 'CSONK',
    UNICHAR: 'UNIKARAKTER',
    UNICODE: 'UNICODE',
    UPPER: 'NAGYBET??S',
    VARA: 'VARA',
    'VAR.P': 'VAR.S',
    VARPA: 'VARPA',
    'VAR.S': 'VAR.M',
    VLOOKUP: 'FKERES',
    WEEKDAY: 'H??T.NAPJA',
    WEEKNUM: 'H??T.SZ??MA',
    WORKDAY: 'KALK.MUNKANAP',
    'WORKDAY.INTL': 'KALK.MUNKANAP.INTL',
    XNPV: 'XNJ??',
    XOR: 'XVAGY',
    YEAR: '??V',
    YEARFRAC: 'T??RT??V',
    ROMAN: 'R??MAI',
    ARABIC: 'ARAB',
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
    VARP: 'VARP',
    STDEV: 'SZ??R??S',
    STDEVP: 'SZ??R??SP',
    FACT: 'FAKT',
    FACTDOUBLE: 'FAKTDUPLA',
    COMBIN: 'KOMBIN??CI??K',
    COMBINA: 'KOMBIN??CI??K.ISM',
    GCD: 'LKO',
    LCM: 'LKT',
    MROUND: 'T??BBSZ.KEREK??T',
    MULTINOMIAL: 'SZORH??NYFAKT',
    QUOTIENT: 'KV??CIENS',
    RANDBETWEEN: 'V??LETLEN.K??Z??TT',
    SERIESSUM: 'SOR??SSZEG',
    SIGN: 'EL??JEL',
    SQRTPI: 'GY??KPI',
    SUMX2MY2: 'SZUMX2B??LY2',
    SUMX2PY2: 'SZUMX2MEGY2',
    SUMXMY2: 'SZUMXB??LY2',
    'EXPON.DIST': 'EXP.ELOSZL',
    EXPONDIST: 'EXP.ELOSZL??S',
    FISHER: 'FISHER',
    FISHERINV: 'INVERZ.FISHER',
    GAMMA: 'GAMMA',
    'GAMMA.DIST': 'GAMMA.ELOSZL',
    'GAMMA.INV': 'GAMMA.INVERZ',
    GAMMADIST: 'GAMMA.ELOSZL??S',
    GAMMAINV: 'INVERZ.GAMMA',
    GAMMALN: 'GAMMALN',
    'GAMMALN.PRECISE': 'GAMMALN.PONTOS',
    GAUSS: 'GAUSS',
    'BETA.DIST': 'B??TA.ELOSZL',
    BETADIST: 'B??TA.ELOSZL??S',
    'BETA.INV': 'B??TA.INVERZ',
    BETAINV: 'INVERZ.B??TA',
    'BINOM.DIST': 'BINOM.ELOSZL',
    BINOMDIST: 'BINOM.ELOSZL??S',
    'BINOM.INV': 'BINOM.INVERZ',
    BESSELI: 'BESSELI',
    BESSELJ: 'BESSELJ',
    BESSELK: 'BESSELK',
    BESSELY: 'BESSELY',
    CHIDIST: 'KHI.ELOSZL??S',
    CHIINV: 'INVERZ.KHI',
    'CHISQ.DIST': 'KHIN??GYZET.ELOSZL??S',
    'CHISQ.DIST.RT': 'KHIN??GYZET.ELOSZL??S.JOBB',
    'CHISQ.INV': 'KHIN??GYZET.INVERZ',
    'CHISQ.INV.RT': 'KHIN??GYZET.INVERZ.JOBB',
    'F.DIST': 'F.ELOSZL',
    'F.DIST.RT': 'F.ELOSZL??S.JOBB',
    'F.INV': 'F.INVERZ',
    'F.INV.RT': 'F.INVERZ.JOBB',
    FDIST: 'F.ELOSZL??S',
    FINV: 'INVERZ.F',
    WEIBULL: 'WEIBULL',
    'WEIBULL.DIST': 'WEIBULL.ELOSZL??S',
    POISSON: 'POISSON',
    'POISSON.DIST': 'POISSON.ELOSZL??S',
    'HYPGEOM.DIST': 'HIPGEOM.ELOSZL??S',
    HYPGEOMDIST: 'HIPERGEOM.ELOSZL??S',
    'T.DIST': 'T.ELOSZL',
    'T.DIST.2T': 'T.ELOSZL??S.2SZ',
    'T.DIST.RT': 'T.ELOSZL??S.JOBB',
    'T.INV': 'T.INVERZ',
    'T.INV.2T': 'T.INVERZ.2SZ',
    TDIST: 'T.ELOSZL??S',
    TINV: 'INVERZ.T',
    LOGINV: 'INVERZ.LOG.ELOSZL??S',
    'LOGNORM.DIST': 'LOGNORM.ELOSZL??S',
    'LOGNORM.INV': 'LOGNORM.INVERZ',
    LOGNORMDIST: 'LOG.ELOSZL??S',
    'NORM.DIST': 'NORM.ELOSZL??S',
    'NORM.INV': 'NORM.INVERZ',
    'NORM.S.DIST': 'NORM.S.ELOSZL??S',
    'NORM.S.INV': 'NORM.S.INVERZ',
    NORMDIST: 'NORM.ELOSZL',
    NORMINV: 'INVERZ.NORM',
    NORMSDIST: 'STNORMELOSZL',
    NORMSINV: 'INVERZ.STNORM',
    PHI: 'FI',
    'NEGBINOM.DIST': 'NEGBINOM.ELOSZL??S',
    NEGBINOMDIST: 'NEGBINOM.ELOSZL',
    COMPLEX: 'KOMPLEX',
    IMABS: 'K??PZ.ABSZ',
    IMAGINARY: 'K??PZETES',
    IMARGUMENT: 'K??PZ.ARGUMENT',
    IMCONJUGATE: 'K??PZ.KONJUG??LT',
    IMCOS: 'K??PZ.COS',
    IMCOSH: 'K??PZ.COSH',
    IMCOT: 'K??PZ.COT',
    IMCSC: 'K??PZ.CSC',
    IMCSCH: 'K??PZ.CSCH',
    IMDIV: 'K??PZ.H??NYAD',
    IMEXP: 'K??PZ.EXP',
    IMLN: 'K??PZ.LN',
    IMLOG10: 'K??PZ.LOG10',
    IMLOG2: 'K??PZ.LOG2',
    IMPOWER: 'K??PZ.HATV',
    IMPRODUCT: 'K??PZ.SZORZAT',
    IMREAL: 'K??PZ.VAL??S',
    IMSEC: 'K??PZ.SEC',
    IMSECH: 'K??PZ.SECH',
    IMSIN: 'K??PZ.SIN',
    IMSINH: 'K??PZ.SINH',
    IMSQRT: 'K??PZ.GY??K',
    IMSUB: 'K??PZ.K??L',
    IMSUM: 'K??PZ.??SSZEG',
    IMTAN: 'K??PZ.TAN',
    LARGE: 'NAGY',
    SMALL: 'KICSI',
    AVEDEV: '??TL.ELT??R??S',
    CONFIDENCE: 'MEGB??ZHAT??S??G',
    'CONFIDENCE.NORM': 'MEGB??ZHAT??S??G.NORM',
    'CONFIDENCE.T': 'MEGB??ZHAT??S??G.T',
    DEVSQ: 'SQ',
    GEOMEAN: 'M??RTANI.K??Z??P',
    HARMEAN: 'HARM.K??Z??P',
    CRITBINOM: 'KRITBINOM',
    PEARSON: 'PEARSON',
    RSQ: 'RN??GYZET',
    STANDARDIZE: 'NORMALIZ??L??S',
    'Z.TEST': 'Z.PR??B',
    ZTEST: 'Z.PR??BA',
    'F.TEST': 'F.PR??B',
    FTEST: 'F.PR??BA',
    STEYX: 'STHIBAYX',
    SLOPE: 'MEREDEKS??G',
    COVAR: 'KOVAR',
    'COVARIANCE.P': 'KOVARIANCIA.S',
    'COVARIANCE.S': 'KOVARIANCIA.M',
    'CHISQ.TEST': 'KHIN??GYZET.PR??BA',
    CHITEST: 'KHI.PR??BA',
    'T.TEST': 'T.PR??B',
    TTEST: 'T.PR??BA',
    SKEW: 'FERDES??G',
    'SKEW.P': 'FERDES??G.P',
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
    'CEILING.MATH': 'PLAFON.MAT',
    FLOOR: 'PADL??',
    'FLOOR.MATH': 'PADL??.MAT',
    'CEILING.PRECISE': 'CEILING.PRECISE',
    'FLOOR.PRECISE': 'FLOOR.PRECISE',
    'ISO.CEILING': 'ISO.CEILING'
  },
  langCode: 'huHU',
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