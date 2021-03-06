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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),

/***/ 6:
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
    DIV_BY_ZERO: '#JAKO/0!',
    ERROR: '#ERROR!',
    NA: '#PUUTTUU!',
    NAME: '#NIMI?',
    NUM: '#LUKU!',
    REF: '#VIITTAUS!',
    SPILL: '#LEVITTYMINEN!',
    VALUE: '#ARVO!'
  },
  functions: {
    FILTER: 'FILTER',
    'ARRAY_CONSTRAIN': 'ARRAY_CONSTRAIN',
    ARRAYFORMULA: 'ARRAYFORMULA',
    ABS: 'ITSEISARVO',
    ACOS: 'ACOS',
    ACOSH: 'ACOSH',
    ACOT: 'ACOT',
    ACOTH: 'ACOTH',
    AND: 'JA',
    ASIN: 'ASIN',
    ASINH: 'ASINH',
    ATAN2: 'ATAN2',
    ATAN: 'ATAN',
    ATANH: 'ATANH',
    AVERAGE: 'KESKIARVO',
    AVERAGEA: 'KESKIARVOA',
    AVERAGEIF: 'KESKIARVO.JOS',
    BASE: 'PERUS',
    BIN2DEC: 'BINDES',
    BIN2HEX: 'BINHEKSA',
    BIN2OCT: 'BINOKT',
    BITAND: 'BITTI.JA',
    BITLSHIFT: 'BITTI.SIIRTO.V',
    BITOR: 'BITTI.TAI',
    BITRSHIFT: 'BITTI.SIIRTO.O',
    BITXOR: 'BITTI.EHDOTON.TAI',
    CEILING: 'PY??RIST??.KERR.YL??S',
    CHAR: 'MERKKI',
    CHOOSE: 'VALITSE.INDEKSI',
    CLEAN: 'SIIVOA',
    CODE: 'KOODI',
    COLUMN: 'SARAKE',
    COLUMNS: 'SARAKKEET',
    CONCATENATE: 'KETJUTA',
    CORREL: 'KORRELAATIO',
    COS: 'COS',
    COSH: 'COSH',
    COT: 'COT',
    COTH: 'COTH',
    COUNT: 'LASKE',
    COUNTA: 'LASKE.A',
    COUNTBLANK: 'LASKE.TYHJ??T',
    COUNTIF: 'LASKE.JOS',
    COUNTIFS: 'LASKE.JOS.JOUKKO',
    COUNTUNIQUE: 'COUNTUNIQUE',
    CSC: 'KOSEK',
    CSCH: 'KOSEKH',
    CUMIPMT: 'MAKSETTU.KORKO',
    CUMPRINC: 'MAKSETTU.LYHENNYS',
    DATE: 'P??IV??YS',
    DATEDIF: 'DATEDIF',
    DATEVALUE: 'P??IV??YSARVO',
    DAY: 'P??IV??',
    DAYS360: 'P??IV??T360',
    DAYS: 'PV',
    DB: 'DB',
    DDB: 'DDB',
    DEC2BIN: 'DESBIN',
    DEC2HEX: 'DESHEKSA',
    DEC2OCT: 'DESOKT',
    DECIMAL: 'DESIMAALI',
    DEGREES: 'ASTEET',
    DELTA: 'SAMA.ARVO',
    DOLLARDE: 'VALUUTTA.DES',
    DOLLARFR: 'VALUUTTA.MURTO',
    EDATE: 'P??IV??.KUUKAUSI',
    EFFECT: "KORKO.EFEKT",
    EOMONTH: 'KUUKAUSI.LOPPU',
    ERF: 'VIRHEFUNKTIO',
    ERFC: 'VIRHEFUNKTIO.KOMPLEMENTTI',
    EVEN: 'PARILLINEN',
    EXACT: 'VERTAA',
    EXP: 'EKSPONENTTI',
    FALSE: 'EP??TOSI',
    FIND: 'ETSI',
    FORMULATEXT: 'KAAVA.TEKSTI',
    FV: 'TULEVA.ARVO',
    FVSCHEDULE: 'TULEVA.ARVO.ERIKORKO',
    HEX2BIN: 'HEKSABIN',
    HEX2DEC: 'HEKSADES',
    HEX2OCT: 'HEKSAOKT',
    HLOOKUP: 'VHAKU',
    HOUR: 'TUNNIT',
    IF: 'JOS',
    IFERROR: 'JOSVIRHE',
    IFNA: 'JOSPUUTTUU',
    INDEX: 'INDEKSI',
    INT: 'KOKONAISLUKU',
    INTERVAL: 'INTERVAL',
    IPMT: 'IPMT',
    ISBINARY: 'ISBINARY',
    ISBLANK: 'ONTYHJ??',
    ISERR: 'ONVIRH',
    ISERROR: 'ONVIRHE',
    ISEVEN: 'ONPARILLINEN',
    ISFORMULA: 'ONKAAVA',
    ISLOGICAL: 'ONTOTUUS',
    ISNA: 'ONPUUTTUU',
    ISNONTEXT: 'ONEI_TEKSTI',
    ISNUMBER: 'ONLUKU',
    ISODD: 'ONPARITON',
    ISOWEEKNUM: 'VIIKKO.ISO.NRO',
    ISPMT: 'ISPMT',
    ISREF: 'ONVIITT',
    ISTEXT: 'ONTEKSTI',
    LEFT: 'VASEN',
    LEN: 'PITUUS',
    LN: 'LUONNLOG',
    LOG10: 'LOG10',
    LOG: 'LOG',
    LOWER: 'PIENET',
    MATCH: 'VASTINE',
    MAX: 'MAKS',
    MAXA: 'MAKSA',
    MAXPOOL: 'MAXPOOL',
    MEDIAN: 'MEDIAANI',
    MEDIANPOOL: 'MEDIANPOOL',
    MID: 'POIMI.TEKSTI',
    MIN: 'MIN',
    MINA: 'MINA',
    MINUTE: 'MINUUTIT',
    MIRR: 'MSIS??INEN',
    MMULT: 'MKERRO',
    MOD: 'JAKOJ',
    MONTH: 'KUUKAUSI',
    NA: 'PUUTTUU',
    NETWORKDAYS: 'TY??P??IV??T',
    'NETWORKDAYS.INTL': 'TY??P??IV??T.KANSV??L',
    NOMINAL: 'KORKO.VUOSI',
    NOT: 'EI',
    NOW: 'NYT',
    NPER: 'NJAKSO',
    NPV: 'NNA',
    OCT2BIN: 'OKTBIN',
    OCT2DEC: 'OKTDES',
    OCT2HEX: 'OKTHEKSA',
    ODD: 'PARITON',
    OFFSET: 'SIIRTYM??',
    OR: 'TAI',
    PDURATION: 'KESTO.JAKSO',
    PI: 'PII',
    PMT: 'MAKSU',
    PRODUCT: 'TULO',
    POWER: 'POTENSSI',
    PPMT: 'PPMT',
    PROPER: 'ERISNIMI',
    PV: 'NA',
    RADIANS: 'RADIAANIT',
    RAND: 'SATUNNAISLUKU',
    RATE: 'KORKO',
    REPLACE: 'KORVAA',
    REPT: 'TOISTA',
    RIGHT: 'OIKEA',
    ROUND: 'PY??RIST??',
    ROUNDDOWN: 'PY??RIST??.DES.ALAS',
    ROUNDUP: 'PY??RIST??.DES.YL??S',
    ROW: 'RIVI',
    ROWS: 'RIVIT',
    RRI: 'TOT.ROI',
    SEARCH: 'K??Y.L??PI',
    SEC: 'SEK',
    SECH: 'SEKH',
    SECOND: 'SEKUNNIT',
    SHEET: 'TAULUKKO',
    SHEETS: 'TAULUKOT',
    SIN: 'SIN',
    SINH: 'SINH',
    SLN: 'STP',
    SPLIT: 'SPLIT',
    SQRT: 'NELI??JUURI',
    STDEVA: 'KESKIHAJONTAA',
    'STDEV.P': 'KESKIHAJONTA.P',
    STDEVPA: 'KESKIHAJONTAPA',
    'STDEV.S': 'KESKIHAJONTA.S',
    SUBSTITUTE: 'VAIHDA',
    SUBTOTAL: 'V??LISUMMA',
    SUM: 'SUMMA',
    SUMIF: 'SUMMA.JOS',
    SUMIFS: 'SUMMA.JOS.JOUKKO',
    SUMPRODUCT: 'TULOJEN.SUMMA',
    SUMSQ: 'NELI??SUMMA',
    SWITCH: '',
    SYD: 'VUOSIPOISTO',
    T: 'T',
    TAN: 'TAN',
    TANH: 'TANH',
    TBILLEQ: 'OBLIG.TUOTTOPROS',
    TBILLPRICE: 'OBLIG.HINTA',
    TBILLYIELD: 'OBLIG.TUOTTO',
    TEXT: 'TEKSTI',
    TIME: 'AIKA',
    TIMEVALUE: 'AIKA_ARVO',
    TODAY: 'T??M??.P??IV??',
    TRANSPOSE: 'TRANSPONOI',
    TRIM: 'POISTA.V??LIT',
    TRUE: 'TOSI',
    TRUNC: 'KATKAISE',
    UNICHAR: 'UNICODEMERKKI',
    UNICODE: 'UNICODE',
    UPPER: 'ISOT',
    VARA: 'VARA',
    'VAR.P': 'VAR.P',
    VARPA: 'VARPA',
    'VAR.S': 'VAR.S',
    VLOOKUP: 'PHAKU',
    WEEKDAY: 'VIIKONP??IV??',
    WEEKNUM: 'VIIKKO.NRO',
    WORKDAY: 'TY??P??IV??',
    'WORKDAY.INTL': 'TY??P??IV??.KANSV??L',
    XNPV: 'NNA.JAKSOTON',
    XOR: 'EHDOTON.TAI',
    YEAR: 'VUOSI',
    YEARFRAC: 'VUOSI.OSA',
    ROMAN: 'ROMAN',
    ARABIC: 'ARABIA',
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
    STDEV: 'KESKIHAJONTA',
    STDEVP: 'KESKIHAJONTAP',
    FACT: 'KERTOMA',
    FACTDOUBLE: 'KERTOMA.OSA',
    COMBIN: 'KOMBINAATIO',
    COMBINA: 'KOMBINAATIOA',
    GCD: 'SUURIN.YHT.TEKIJ??',
    LCM: 'PIENIN.YHT.JAETTAVA',
    MROUND: 'PY??RIST??.KERR',
    MULTINOMIAL: 'MULTINOMI',
    QUOTIENT: 'OSAM????R??',
    RANDBETWEEN: 'SATUNNAISLUKU.V??LILT??',
    SERIESSUM: 'SARJA.SUMMA',
    SIGN: 'ETUMERKKI',
    SQRTPI: 'NELI??JUURI.PII',
    SUMX2MY2: 'NELI??SUMMIEN.EROTUS',
    SUMX2PY2: 'NELI??SUMMIEN.SUMMA',
    SUMXMY2: 'EROTUSTEN.NELI??SUMMA',
    'EXPON.DIST': 'EKSPONENTIAALI.JAKAUMA',
    EXPONDIST: 'EKSPONENTIAALIJAKAUMA',
    FISHER: 'FISHER',
    FISHERINV: 'FISHER.K????NT',
    GAMMA: 'GAMMA',
    'GAMMA.DIST': 'GAMMA.JAKAUMA',
    'GAMMA.INV': 'GAMMA.JAKAUMA.K????NT',
    GAMMADIST: 'GAMMAJAKAUMA',
    GAMMAINV: 'GAMMAJAKAUMA.K????NT',
    GAMMALN: 'GAMMALN',
    'GAMMALN.PRECISE': 'GAMMALN.TARKKA',
    GAUSS: 'GAUSS',
    'BETA.DIST': 'BEETA.JAKAUMA',
    BETADIST: 'BEETAJAKAUMA',
    'BETA.INV': 'BEETA.K????NT',
    BETAINV: 'BEETAJAKAUMA.K????NT',
    'BINOM.DIST': 'BINOMI.JAKAUMA',
    BINOMDIST: 'BINOMIJAKAUMA',
    'BINOM.INV': 'BINOMIJAKAUMA.K????NT',
    BESSELI: 'BESSELI',
    BESSELJ: 'BESSELJ',
    BESSELK: 'BESSELK',
    BESSELY: 'BESSELY',
    CHIDIST: 'CHIJAKAUMA',
    CHIINV: 'CHIJAKAUMA.K????NT',
    'CHISQ.DIST': 'CHINELI??.JAKAUMA',
    'CHISQ.DIST.RT': 'CHINELI??.JAKAUMA.OH',
    'CHISQ.INV': 'CHINELI??.K????NT',
    'CHISQ.INV.RT': 'CHINELI??.K????NT.OH',
    'F.DIST': 'F.JAKAUMA',
    'F.DIST.RT': 'F.JAKAUMA.OH',
    'F.INV': 'F.K????NT',
    'F.INV.RT': 'F.K????NT.OH',
    FDIST: 'FJAKAUMA',
    FINV: 'FJAKAUMA.K????NT',
    WEIBULL: 'WEIBULL',
    'WEIBULL.DIST': 'WEIBULL.JAKAUMA',
    POISSON: 'POISSON',
    'POISSON.DIST': 'POISSON.JAKAUMA',
    'HYPGEOM.DIST': 'HYPERGEOM_JAKAUMA',
    HYPGEOMDIST: 'HYPERGEOM.JAKAUMA',
    'T.DIST': 'T.JAKAUMA',
    'T.DIST.2T': 'T.JAKAUMA.2S',
    'T.DIST.RT': 'T.JAKAUMA.OH',
    'T.INV': 'T.K????NT',
    'T.INV.2T': 'T.K????NT.2S',
    TDIST: 'TJAKAUMA',
    TINV: 'TJAKAUMA.K????NT',
    LOGINV: 'LOGNORM.JAKAUMA.K????NT',
    'LOGNORM.DIST': 'LOGNORM_JAKAUMA',
    'LOGNORM.INV': 'LOGNORM.K????NT',
    LOGNORMDIST: 'LOGNORM.JAKAUMA',
    'NORM.DIST': 'NORMAALI.JAKAUMA',
    'NORM.INV': 'NORMAALI.JAKAUMA.K????NT',
    'NORM.S.DIST': 'NORM_JAKAUMA.NORMIT',
    'NORM.S.INV': 'NORM_JAKAUMA.K????NT',
    NORMDIST: 'NORM.JAKAUMA',
    NORMINV: 'NORM.JAKAUMA.K????NT',
    NORMSDIST: 'NORM.JAKAUMA.NORMIT',
    NORMSINV: 'NORM.JAKAUMA.NORMIT.K????NT',
    PHI: 'FII',
    'NEGBINOM.DIST': 'BINOMI.JAKAUMA.NEG',
    NEGBINOMDIST: 'BINOMIJAKAUMA.NEG',
    COMPLEX: 'KOMPLEKSI',
    IMABS: 'KOMPLEKSI.ABS',
    IMAGINARY: 'KOMPLEKSI.IMAG',
    IMARGUMENT: 'KOMPLEKSI.ARG',
    IMCONJUGATE: 'KOMPLEKSI.KONJ',
    IMCOS: 'KOMPLEKSI.COS',
    IMCOSH: 'KOMPLEKSI.COSH',
    IMCOT: 'KOMPLEKSI.COT',
    IMCSC: 'KOMPLEKSI.KOSEK',
    IMCSCH: 'KOMPLEKSI.KOSEKH',
    IMDIV: 'KOMPLEKSI.OSAM',
    IMEXP: 'KOMPLEKSI.EKSP',
    IMLN: 'KOMPLEKSI.LN',
    IMLOG10: 'KOMPLEKSI.LOG10',
    IMLOG2: 'KOMPLEKSI.LOG2',
    IMPOWER: 'KOMPLEKSI.POT',
    IMPRODUCT: 'KOMPLEKSI.TULO',
    IMREAL: 'KOMPLEKSI.REAALI',
    IMSEC: 'KOMPLEKSI.SEK',
    IMSECH: 'KOMPLEKSI.SEKH',
    IMSIN: 'KOMPLEKSI.SIN',
    IMSINH: 'KOMPLEKSI.SINH',
    IMSQRT: 'KOMPLEKSI.NELI??J',
    IMSUB: 'KOMPLEKSI.EROTUS',
    IMSUM: 'KOMPLEKSI.SUM',
    IMTAN: 'KOMPLEKSI.TAN',
    LARGE: 'SUURI',
    SMALL: 'PIENI',
    AVEDEV: 'KESKIPOIKKEAMA',
    CONFIDENCE: 'LUOTTAMUSV??LI',
    'CONFIDENCE.NORM': 'LUOTTAMUSV??LI.NORM',
    'CONFIDENCE.T': 'LUOTTAMUSV??LI.T',
    DEVSQ: 'OIKAISTU.NELI??SUMMA',
    GEOMEAN: 'KESKIARVO.GEOM',
    HARMEAN: 'KESKIARVO.HARM',
    CRITBINOM: 'BINOMIJAKAUMA.KRIT',
    PEARSON: 'PEARSON',
    RSQ: 'PEARSON.NELI??',
    STANDARDIZE: 'NORMITA',
    'Z.TEST': 'Z.TESTI',
    ZTEST: 'ZTESTI',
    'F.TEST': 'F.TESTI',
    FTEST: 'FTESTI',
    STEYX: 'KESKIVIRHE',
    SLOPE: 'KULMAKERROIN',
    COVAR: 'KOVARIANSSI',
    'COVARIANCE.P': 'KOVARIANSSI.P',
    'COVARIANCE.S': 'KOVARIANSSI.S',
    'CHISQ.TEST': 'CHINELI??.TESTI',
    CHITEST: 'CHITESTI',
    'T.TEST': 'T.TESTI',
    TTEST: 'TTESTI',
    SKEW: 'JAKAUMAN.VINOUS',
    'SKEW.P': 'JAKAUMAN.VINOUS.POP',
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
    'CEILING.MATH': 'PY??RIST??.KERR.YL??S.MATEMAATTINEN',
    FLOOR: 'PY??RIST??.KERR.ALAS',
    'FLOOR.MATH': 'PY??RIST??.KERR.ALAS.MATEMAATTINEN',
    'CEILING.PRECISE': 'CEILING.PRECISE',
    'FLOOR.PRECISE': 'FLOOR.PRECISE',
    'ISO.CEILING': 'ISO.CEILING'
  },
  langCode: 'fiFI',
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