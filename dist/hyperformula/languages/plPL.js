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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),

/***/ 13:
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
    CYCLE: '#CYKL!',
    DIV_BY_ZERO: '#DZIEL/0!',
    ERROR: '#B????D!',
    NA: '#N/A',
    NAME: '#NAZWA?',
    NUM: '#LICZBA!',
    REF: '#ADR!',
    SPILL: '#ROZLANIE!',
    VALUE: '#ARG!'
  },
  functions: {
    FILTER: 'FILTER',
    'ARRAY_CONSTRAIN': 'ARRAY_CONSTRAIN',
    ARRAYFORMULA: 'ARRAYFORMULA',
    ABS: 'WART.BEZWGL',
    ACOS: 'ACOS',
    ACOSH: 'ACOSH',
    ACOT: 'ACOT',
    ACOTH: 'ACOTH',
    AND: 'ORAZ',
    ASIN: 'ASIN',
    ASINH: 'ASINH',
    ATAN2: 'ATAN2',
    ATAN: 'ATAN',
    ATANH: 'ATANH',
    AVERAGE: '??REDNIA',
    AVERAGEA: '??REDNIA.A',
    AVERAGEIF: '??REDNIA.JE??ELI',
    BASE: 'PODSTAWA',
    BIN2DEC: 'DW??JK.NA.DZIES',
    BIN2HEX: 'DW??JK.NA.SZESN',
    BIN2OCT: 'DW??JK.NA.??SM',
    BITAND: 'BITAND',
    BITLSHIFT: 'BITLSHIFT',
    BITOR: 'BITOR',
    BITRSHIFT: 'BITRSHIFT',
    BITXOR: 'BITXOR',
    CEILING: 'ZAOKR.W.G??R??',
    CHAR: 'ZNAK',
    CHOOSE: 'WYBIERZ',
    CLEAN: 'OCZY????',
    CODE: 'KOD',
    COLUMN: 'NR.KOLUMNY',
    COLUMNS: 'LICZBA.KOLUMN',
    CONCATENATE: 'Z????CZ.TEKST',
    CORREL: 'WSP.KORELACJI',
    COS: 'COS',
    COSH: 'COSH',
    COT: 'COT',
    COTH: 'COTH',
    COUNT: 'COUNT',
    COUNTA: 'COUNTA',
    COUNTBLANK: 'LICZ.PUSTE',
    COUNTIF: 'LICZ.JE??ELI',
    COUNTIFS: 'LICZ.WARUNKI',
    COUNTUNIQUE: 'COUNTUNIQUE',
    CSC: 'CSC',
    CSCH: 'CSCH',
    CUMIPMT: 'SP??AC.ODS',
    CUMPRINC: 'SP??AC.KAPIT',
    DATE: 'DATA',
    DATEDIF: 'DATEDIF',
    DATEVALUE: 'DATA.WARTO????',
    DAY: 'DZIE??',
    DAYS360: 'DNI.360',
    DAYS: 'DNI',
    DB: 'DB',
    DDB: 'DDB',
    DEC2BIN: 'DZIES.NA.DW??JK',
    DEC2HEX: 'DZIES.NA.SZESN',
    DEC2OCT: 'DZIES.NA.??SM',
    DECIMAL: 'DZIESI??TNA',
    DEGREES: 'STOPNIE',
    DELTA: 'DELTA',
    DOLLARDE: 'CENA.DZIES',
    DOLLARFR: 'CENA.U??AM',
    EDATE: 'NR.SER.DATY',
    EFFECT: "EFEKTYWNA",
    EOMONTH: 'NR.SER.OST.DN.MIE??',
    ERF: 'FUNKCJA.B??',
    ERFC: 'KOMP.FUNKCJA.B??',
    EVEN: 'ZAOKR.DO.PARZ',
    EXACT: 'POR??WNAJ',
    EXP: 'EXP',
    FALSE: 'FA??SZ',
    FIND: 'ZNAJD??',
    FORMULATEXT: 'FORMU??A.TEKST',
    FV: 'FV',
    FVSCHEDULE: 'WART.PRZYSZ??.KAP',
    HEX2BIN: 'SZESN.NA.DW??JK',
    HEX2DEC: 'SZESN.NA.DZIES',
    HEX2OCT: 'SZESN.NA.??SM',
    HLOOKUP: 'WYSZUKAJ.POZIOMO',
    HOUR: 'GODZINA',
    IF: 'JE??ELI',
    IFERROR: 'JE??ELI.B????D',
    IFNA: 'JE??ELI.ND',
    INDEX: 'INDEKS',
    INT: 'ZAOKR.DO.CA??K',
    INTERVAL: 'INTERVAL',
    IPMT: 'IPMT',
    ISBINARY: 'ISBINARY',
    ISBLANK: 'CZY.PUSTA',
    ISERR: 'CZY.B??',
    ISERROR: 'CZY.B????D',
    ISEVEN: 'CZY.PARZYSTE',
    ISFORMULA: 'CZY.FORMU??A',
    ISLOGICAL: 'CZY.LOGICZNA',
    ISNA: 'CZY.BRAK',
    ISNONTEXT: 'CZY.NIE.TEKST',
    ISNUMBER: 'CZY.LICZBA',
    ISODD: 'CZY.NIEPARZYSTE',
    ISOWEEKNUM: 'ISO.NUM.TYG',
    ISPMT: 'ISPMT',
    ISREF: 'CZY.ADR',
    ISTEXT: 'CZY.TEKST',
    LEFT: 'LEWY',
    LEN: 'D??',
    LN: 'LN',
    LOG10: 'LOG10',
    LOG: 'LOG',
    LOWER: 'LITERY.MA??E',
    MATCH: 'PODAJ.POZYCJ??',
    MAX: 'MAKS',
    MAXA: 'MAX.A',
    MAXPOOL: 'MAKS.Z.PULI',
    MEDIAN: 'MEDIANA',
    MEDIANPOOL: 'MEDIANA.Z.PULI',
    MID: 'FRAGMENT.TEKSTU',
    MIN: 'MIN',
    MINA: 'MIN.A',
    MINUTE: 'MINUTA',
    MIRR: 'MIRR',
    MMULT: 'MACIERZ.ILOCZYN',
    MOD: 'MOD',
    MONTH: 'MIESI??C',
    NA: 'BRAK',
    NETWORKDAYS: 'DNI.ROBOCZE',
    'NETWORKDAYS.INTL': 'DNI.ROBOCZE.NIESTAND',
    NOMINAL: 'NOMINALNA',
    NOT: 'NIE',
    NOW: 'TERAZ',
    NPER: 'NPER',
    NPV: 'NPV',
    OCT2BIN: '??SM.NA.DW??JK',
    OCT2DEC: '??SM.NA.DZIES',
    OCT2HEX: '??SM.NA.SZESN',
    ODD: 'ZAOKR.DO.NPARZ',
    OFFSET: 'PRZESUNI??CIE',
    OR: 'LUB',
    PDURATION: 'ROCZ.PRZYCH',
    PI: 'PI',
    PMT: 'PMT',
    PRODUCT: 'ILOCZYN',
    POWER: 'POT??GA',
    PPMT: 'PPMT',
    PROPER: 'Z.WIELKIEJ.LITERY',
    PV: 'PV',
    RADIANS: 'RADIANY',
    RAND: 'LOSUJ',
    RATE: 'RATE',
    REPLACE: 'ZAST??P',
    REPT: 'POWT',
    RIGHT: 'PRAWY',
    ROUND: 'ZAOKR',
    ROUNDDOWN: 'ZAOKR.D????',
    ROUNDUP: 'ZAOKR.G??RA',
    ROW: 'WIERSZ',
    ROWS: 'ILE.WIERSZY',
    RRI: 'R??WNOW.STOPA.PROC',
    SEARCH: 'SZUKAJ.TEKST',
    SEC: 'SEC',
    SECH: 'SECH',
    SECOND: 'SEKUNDA',
    SHEET: 'ARKUSZ',
    SHEETS: 'ARKUSZE',
    SIN: 'SIN',
    SINH: 'SINH',
    SLN: 'SLN',
    SPLIT: 'PODZIEL.TEKST',
    SQRT: 'PIERWIASTEK',
    STDEVA: 'ODCH.STANDARDOWE.A',
    'STDEV.P': 'ODCH.STAND.POPUL',
    STDEVPA: 'ODCH.STANDARD.POPUL.A',
    'STDEV.S': 'ODCH.STANDARD.PR??BKI',
    SUBSTITUTE: 'PODSTAW',
    SUBTOTAL: 'SUMY.CZ????CIOWE',
    SUM: 'SUMA',
    SUMIF: 'SUMA.JE??ELI',
    SUMIFS: 'SUMY.JE??ELI',
    SUMPRODUCT: 'SUMA.ILOCZYN??W',
    SUMSQ: 'SUMSQ',
    SWITCH: 'PRZE????CZ',
    SYD: 'SYD',
    T: 'T',
    TAN: 'TAN',
    TANH: 'TANH',
    TBILLEQ: 'RENT.EKW.BS',
    TBILLPRICE: 'CENA.BS',
    TBILLYIELD: 'RENT.BS',
    TEXT: 'TEKST',
    TIME: 'CZAS',
    TIMEVALUE: 'CZAS.WARTO????',
    TODAY: 'DZI??',
    TRANSPOSE: 'TRANSPONUJ',
    TRIM: 'USU??.ZB??DNE.ODST??PY',
    TRUE: 'PRAWDA',
    TRUNC: 'LICZBA.CA??K',
    UNICHAR: 'ZNAK.UNICODE',
    UNICODE: 'UNICODE',
    UPPER: 'LITERY.WIELKIE',
    VARA: 'WARIANCJA.A',
    'VAR.P': 'WARIANCJA.POP',
    VARPA: 'WARIANCJA.POPUL.A',
    'VAR.S': 'WARIANCJA.PR??BKI',
    VLOOKUP: 'WYSZUKAJ.PIONOWO',
    WEEKDAY: 'DZIE??.TYG',
    WEEKNUM: 'NUM.TYG',
    WORKDAY: 'DZIE??.ROBOCZY',
    'WORKDAY.INTL': 'DZIE??.ROBOCZY.NIESTAND',
    XNPV: 'XNPV',
    XOR: 'XOR',
    YEAR: 'ROK',
    YEARFRAC: 'CZ??????.ROKU',
    ROMAN: 'RZYMSKIE',
    ARABIC: 'ARABSKA',
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
    VAR: 'WARIANCJA',
    VARP: 'WARIANCJA.POPUL',
    STDEV: 'ODCH.STANDARDOWE',
    STDEVP: 'ODCH.STANDARD.POPUL',
    FACT: 'SILNIA',
    FACTDOUBLE: 'SILNIA.DWUKR',
    COMBIN: 'KOMBINACJE',
    COMBINA: 'KOMBINACJE.A',
    GCD: 'NAJW.WSP.DZIEL',
    LCM: 'NAJMN.WSP.WIEL',
    MROUND: 'ZAOKR.DO.WIELOKR',
    MULTINOMIAL: 'WIELOMIAN',
    QUOTIENT: 'CZ.CA??K.DZIELENIA',
    RANDBETWEEN: 'LOS.ZAKR',
    SERIESSUM: 'SUMA.SZER.POT',
    SIGN: 'ZNAK.LICZBY',
    SQRTPI: 'PIERW.PI',
    SUMX2MY2: 'SUMA.X2.M.Y2',
    SUMX2PY2: 'SUMA.X2.P.Y2',
    SUMXMY2: 'SUMA.XMY.2',
    'EXPON.DIST': 'ROZK??.EXP',
    EXPONDIST: 'ROZK??AD.EXP',
    FISHER: 'ROZK??AD.FISHER',
    FISHERINV: 'ROZK??AD.FISHER.ODW',
    GAMMA: 'GAMMA',
    'GAMMA.DIST': 'ROZK??.GAMMA',
    'GAMMA.INV': 'ROZK??.GAMMA.ODWR',
    GAMMADIST: 'ROZK??AD.GAMMA',
    GAMMAINV: 'ROZK??AD.GAMMA.ODW',
    GAMMALN: 'ROZK??AD.LIN.GAMMA',
    'GAMMALN.PRECISE': 'ROZK??AD.LIN.GAMMA.DOK??',
    GAUSS: 'GAUSS',
    'BETA.DIST': 'ROZK??.BETA',
    BETADIST: 'ROZK??AD.BETA',
    'BETA.INV': 'ROZK??.BETA.ODWR',
    BETAINV: 'ROZK??AD.BETA.ODW',
    'BINOM.DIST': 'ROZK??.DWUM',
    BINOMDIST: 'ROZK??AD.DWUM',
    'BINOM.INV': 'ROZK??.DWUM.ODWR',
    BESSELI: 'BESSEL.I',
    BESSELJ: 'BESSEL.J',
    BESSELK: 'BESSEL.K',
    BESSELY: 'BESSEL.Y',
    CHIDIST: 'ROZK??AD.CHI',
    CHIINV: 'ROZK??AD.CHI.ODW',
    'CHISQ.DIST': 'ROZK??.CHI',
    'CHISQ.DIST.RT': 'ROZK??.CHI.P??',
    'CHISQ.INV': 'ROZK??.CHI.ODWR',
    'CHISQ.INV.RT': 'ROZK??.CHI.ODWR.P??',
    'F.DIST': 'ROZK??.F',
    'F.DIST.RT': 'ROZK??.F.P??',
    'F.INV': 'ROZK??.F.ODWR',
    'F.INV.RT': 'ROZK??.F.ODWR.P??',
    FDIST: 'ROZK??AD.F',
    FINV: 'ROZK??AD.F.ODW',
    WEIBULL: 'ROZK??AD.WEIBULL',
    'WEIBULL.DIST': 'ROZK??.WEIBULL',
    POISSON: 'ROZK??AD.POISSON',
    'POISSON.DIST': 'ROZK??.POISSON',
    'HYPGEOM.DIST': 'ROZK??.HIPERGEOM',
    HYPGEOMDIST: 'ROZK??AD.HIPERGEOM',
    'T.DIST': 'ROZK??.T.PS',
    'T.DIST.2T': 'ROZK??.T.D??',
    'T.DIST.RT': 'ROZK??.T.P??',
    'T.INV': 'ROZK??.T.ODWR',
    'T.INV.2T': 'ROZK??.T.ODWR.D??',
    TDIST: 'ROZK??AD.T',
    TINV: 'ROZK??AD.T.ODW',
    LOGINV: 'ROZK??AD.LOG.ODW',
    'LOGNORM.DIST': 'ROZK??.LOG',
    'LOGNORM.INV': 'ROZK??.LOG.ODWR',
    LOGNORMDIST: 'ROZK??AD.LOG',
    'NORM.DIST': 'ROZK??.NORMALNY',
    'NORM.INV': 'ROZK??.NORMALNY.ODWR',
    'NORM.S.DIST': 'ROZK??.NORMALNY.S',
    'NORM.S.INV': 'ROZK??.NORMALNY.S.ODWR',
    NORMDIST: 'ROZK??AD.NORMALNY',
    NORMINV: 'ROZK??AD.NORMALNY.ODW',
    NORMSDIST: 'ROZK??AD.NORMALNY.S',
    NORMSINV: 'ROZK??AD.NORMALNY.S.ODW',
    PHI: 'PHI',
    'NEGBINOM.DIST': 'ROZK??.DWUM.PRZEC',
    NEGBINOMDIST: 'ROZK??AD.DWUM.PRZEC',
    COMPLEX: 'LICZBA.ZESP',
    IMABS: 'MODU??.LICZBY.ZESP',
    IMAGINARY: 'CZ.UROJ.LICZBY.ZESP',
    IMARGUMENT: 'ARG.LICZBY.ZESP',
    IMCONJUGATE: 'SPRZ????.LICZBY.ZESP',
    IMCOS: 'COS.LICZBY.ZESP',
    IMCOSH: 'COSH.LICZBY.ZESP',
    IMCOT: 'COT.LICZBY.ZESP',
    IMCSC: 'CSC.LICZBY.ZESP',
    IMCSCH: 'CSCH.LICZBY.ZESP',
    IMDIV: 'ILORAZ.LICZB.ZESP',
    IMEXP: 'EXP.LICZBY.ZESP',
    IMLN: 'LN.LICZBY.ZESP',
    IMLOG10: 'LOG10.LICZBY.ZESP',
    IMLOG2: 'LOG2.LICZBY.ZESP',
    IMPOWER: 'POT??GA.LICZBY.ZESP',
    IMPRODUCT: 'ILOCZYN.LICZB.ZESP',
    IMREAL: 'CZ.RZECZ.LICZBY.ZESP',
    IMSEC: 'SEC.LICZBY.ZESP',
    IMSECH: 'SECH.LICZBY.ZESP',
    IMSIN: 'SIN.LICZBY.ZESP',
    IMSINH: 'SINH.LICZBY.ZESP',
    IMSQRT: 'PIERWIASTEK.LICZBY.ZESP',
    IMSUB: 'R????N.LICZB.ZESP',
    IMSUM: 'SUMA.LICZB.ZESP',
    IMTAN: 'TAN.LICZBY.ZESP',
    LARGE: 'MAX.K',
    SMALL: 'MIN.K',
    AVEDEV: 'ODCH.??REDNIE',
    CONFIDENCE: 'UFNO????',
    'CONFIDENCE.NORM': 'UFNO????.NORM',
    'CONFIDENCE.T': 'UFNO????.T',
    DEVSQ: 'ODCH.KWADRATOWE',
    GEOMEAN: '??REDNIA.GEOMETRYCZNA',
    HARMEAN: '??REDNIA.HARMONICZNA',
    CRITBINOM: 'PR??G.ROZK??AD.DWUM',
    PEARSON: 'PEARSON',
    RSQ: 'R.KWADRAT',
    STANDARDIZE: 'NORMALIZUJ',
    'Z.TEST': 'Z.TEST',
    ZTEST: 'TEST.Z',
    'F.TEST': 'F.TEST',
    FTEST: 'TEST.F',
    STEYX: 'REGB??STD',
    SLOPE: 'NACHYLENIE',
    COVAR: 'KOWARIANCJA',
    'COVARIANCE.P': 'KOWARIANCJA.POPUL',
    'COVARIANCE.S': 'KOWARIANCJA.PR??BKI',
    'CHISQ.TEST': 'CHI.TEST',
    CHITEST: 'TEST.CHI',
    'T.TEST': 'T.TEST',
    TTEST: 'TEST.T',
    SKEW: 'SKO??NO????',
    'SKEW.P': 'SKO??NO????.P',
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
    'CEILING.MATH': 'ZAOKR.W.G??R??.MATEMATYCZNE',
    FLOOR: 'ZAOKR.W.D????',
    'FLOOR.MATH': 'ZAOKR.W.D????.MATEMATYCZNE',
    'CEILING.PRECISE': 'CEILING.PRECISE',
    'FLOOR.PRECISE': 'FLOOR.PRECISE',
    'ISO.CEILING': 'ISO.CEILING'
  },
  langCode: 'plPL',
  ui: {
    NEW_SHEET_PREFIX: 'Arkusz'
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