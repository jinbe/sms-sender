const pricing = [
  { iso: "PG", price: 0.7544 },
  { iso: "RU", price: 0.7096 },
  { iso: "UZ", price: 0.4571 },
  { iso: "TJ", price: 0.4505 },
  { iso: "ID", price: 0.4414 },
  { iso: "BT", price: 0.4007 },
  { iso: "LY", price: 0.3984 },
  { iso: "LK", price: 0.3962 },
  { iso: "AZ", price: 0.3877 },
  { iso: "PS", price: 0.3869 },
  { iso: "BI", price: 0.3757 },
  { iso: "AF", price: 0.3756 },
  { iso: "MG", price: 0.3728 },
  { iso: "LB", price: 0.3619 },
  { iso: "IR", price: 0.3534 },
  { iso: "ET", price: 0.3425 },
  { iso: "IQ", price: 0.3401 },
  { iso: "PK", price: 0.331 },
  { iso: "MW", price: 0.3307 },
  { iso: "ZM", price: 0.3278 },
  { iso: "TM", price: 0.3233 },
  { iso: "BD", price: 0.3222 },
  { iso: "KG", price: 0.3178 },
  { iso: "KM", price: 0.3119 },
  { iso: "SY", price: 0.3118 },
  { iso: "SD", price: 0.3043 },
  { iso: "NE", price: 0.2971 },
  { iso: "TD", price: 0.2897 },
  { iso: "KZ", price: 0.2852 },
  { iso: "MM", price: 0.2829 },
  { iso: "NG", price: 0.2823 },
  { iso: "TN", price: 0.2803 },
  { iso: "MN", price: 0.279 },
  { iso: "EG", price: 0.2777 },
  { iso: "BZ", price: 0.2738 },
  { iso: "JO", price: 0.2726 },
  { iso: "TZ", price: 0.269 },
  { iso: "GA", price: 0.2634 },
  { iso: "SN", price: 0.2594 },
  { iso: "MR", price: 0.2583 },
  { iso: "KW", price: 0.2581 },
  { iso: "DZ", price: 0.2575 },
  { iso: "BY", price: 0.2521 },
  { iso: "GT", price: 0.2498 },
  { iso: "MZ", price: 0.2455 },
  { iso: "CI", price: 0.2454 },
  { iso: "RS", price: 0.2416 },
  { iso: "TT", price: 0.2399 },
  { iso: "SS", price: 0.2399 },
  { iso: "YE", price: 0.2391 },
  { iso: "HT", price: 0.2356 },
  { iso: "CD", price: 0.2291 },
  { iso: "SO", price: 0.2286 },
  { iso: "MA", price: 0.2244 },
  { iso: "CV", price: 0.2239 },
  { iso: "ML", price: 0.2227 },
  { iso: "QA", price: 0.2218 },
  { iso: "NP", price: 0.2192 },
  { iso: "UG", price: 0.2122 },
  { iso: "MY", price: 0.2118 },
  { iso: "QK", price: 0.2114 },
  { iso: "CG", price: 0.2099 },
  { iso: "KH", price: 0.2055 },
  { iso: "LS", price: 0.204 },
  { iso: "JM", price: 0.2031 },
  { iso: "TG", price: 0.2019 },
  { iso: "ZW", price: 0.2016 },
  { iso: "PH", price: 0.2001 },
  { iso: "SR", price: 0.1971 },
  { iso: "VC", price: 0.1954 },
  { iso: "GD", price: 0.193 },
  { iso: "NU", price: 0.1928 },
  { iso: "RE", price: 0.1911 },
  { iso: "GH", price: 0.1889 },
  { iso: "AS", price: 0.1881 },
  { iso: "SL", price: 0.1877 },
  { iso: "VG", price: 0.1875 },
  { iso: "WS", price: 0.1856 },
  { iso: "MC", price: 0.1856 },
  { iso: "RW", price: 0.1849 },
  { iso: "GF", price: 0.1842 },
  { iso: "BF", price: 0.1818 },
  { iso: "EC", price: 0.181 },
  { iso: "PF", price: 0.1797 },
  { iso: "GY", price: 0.1787 },
  { iso: "LA", price: 0.1772 },
  { iso: "MV", price: 0.1771 },
  { iso: "DM", price: 0.1768 },
  { iso: "GW", price: 0.1764 },
  { iso: "NC", price: 0.1761 },
  { iso: "UA", price: 0.1747 },
  { iso: "IL", price: 0.1739 },
  { iso: "PA", price: 0.1732 },
  { iso: "GQ", price: 0.1729 },
  { iso: "GM", price: 0.166 },
  { iso: "VU", price: 0.1657 },
  { iso: "KY", price: 0.1652 },
  { iso: "FJ", price: 0.1651 },
  { iso: "DJ", price: 0.1624 },
  { iso: "MU", price: 0.1597 },
  { iso: "MH", price: 0.1589 },
  { iso: "GE", price: 0.1589 },
  { iso: "VN", price: 0.1552 },
  { iso: "GN", price: 0.1517 },
  { iso: "BM", price: 0.1516 },
  { iso: "PM", price: 0.1507 },
  { iso: "SI", price: 0.1491 },
  { iso: "BG", price: 0.1466 },
  { iso: "CM", price: 0.1464 },
  { iso: "KI", price: 0.1455 },
  { iso: "BO", price: 0.1452 },
  { iso: "BJ", price: 0.1445 },
  { iso: "OM", price: 0.1429 },
  { iso: "SA", price: 0.1422 },
  { iso: "CK", price: 0.1396 },
  { iso: "AI", price: 0.1387 },
  { iso: "AM", price: 0.1384 },
  { iso: "LR", price: 0.1375 },
  { iso: "FK", price: 0.136 },
  { iso: "GP", price: 0.135 },
  { iso: "TC", price: 0.1341 },
  { iso: "TV", price: 0.1332 },
  { iso: "PE", price: 0.1325 },
  { iso: "MQ", price: 0.132 },
  { iso: "AD", price: 0.1317 },
  { iso: "ST", price: 0.1307 },
  { iso: "TO", price: 0.1307 },
  { iso: "KE", price: 0.1304 },
  { iso: "BB", price: 0.1289 },
  { iso: "CF", price: 0.1218 },
  { iso: "ER", price: 0.1166 },
  { iso: "NL", price: 0.1164 },
  { iso: "AW", price: 0.1159 },
  { iso: "LC", price: 0.1147 },
  { iso: "ME", price: 0.1137 },
  { iso: "TL", price: 0.1135 },
  { iso: "KN", price: 0.111 },
  { iso: "MS", price: 0.11 },
  { iso: "WF", price: 0.11 },
  { iso: "SM", price: 0.1096 },
  { iso: "AE", price: 0.1092 },
  { iso: "GI", price: 0.1091 },
  { iso: "MX", price: 0.1079 },
  { iso: "BE", price: 0.105 },
  { iso: "NZ", price: 0.105 },
  { iso: "PW", price: 0.0998 },
  { iso: "BW", price: 0.0998 },
  { iso: "AG", price: 0.098 },
  { iso: "AT", price: 0.0979 },
  { iso: "SV", price: 0.0972 },
  { iso: "EE", price: 0.0958 },
  { iso: "DE", price: 0.094 },
  { iso: "AR", price: 0.0935 },
  { iso: "PY", price: 0.0934 },
  { iso: "IT", price: 0.0927 },
  { iso: "SZ", price: 0.0919 },
  { iso: "HR", price: 0.0915 },
  { iso: "HU", price: 0.091 },
  { iso: "AL", price: 0.091 },
  { iso: "AO", price: 0.0887 },
  { iso: "SK", price: 0.0883 },
  { iso: "ES", price: 0.0875 },
  { iso: "CY", price: 0.0864 },
  { iso: "FI", price: 0.0861 },
  { iso: "UY", price: 0.0852 },
  { iso: "VE", price: 0.0852 },
  { iso: "HN", price: 0.0847 },
  { iso: "NI", price: 0.0841 },
  { iso: "BA", price: 0.084 },
  { iso: "JP", price: 0.084 },
  { iso: "CU", price: 0.084 },
  { iso: "IN", price: 0.0832 },
  { iso: "SB", price: 0.083 },
  { iso: "DO", price: 0.0815 },
  { iso: "FR", price: 0.0798 },
  { iso: "ZA", price: 0.0757 },
  { iso: "MK", price: 0.0744 },
  { iso: "LU", price: 0.074 },
  { iso: "RO", price: 0.0737 },
  { iso: "IE", price: 0.0735 },
  { iso: "FM", price: 0.0735 },
  { iso: "CH", price: 0.0725 },
  { iso: "LV", price: 0.0715 },
  { iso: "MD", price: 0.0699 },
  { iso: "GU", price: 0.0687 },
  { iso: "CL", price: 0.0684 },
  { iso: "HK", price: 0.0682 },
  { iso: "FO", price: 0.0676 },
  { iso: "IS", price: 0.0661 },
  { iso: "NO", price: 0.0651 },
  { iso: "MT", price: 0.065 },
  { iso: "NA", price: 0.0626 },
  { iso: "GR", price: 0.062 },
  { iso: "SE", price: 0.0609 },
  { iso: "CZ", price: 0.0601 },
  { iso: "BR", price: 0.0599 },
  { iso: "TW", price: 0.0595 },
  { iso: "MO", price: 0.059 },
  { iso: "LT", price: 0.0545 },
  { iso: "CO", price: 0.0525 },
  { iso: "BS", price: 0.0525 },
  { iso: "DK", price: 0.0524 },
  { iso: "AU", price: 0.0515 },
  { iso: "KR", price: 0.0494 },
  { iso: "PT", price: 0.0473 },
  { iso: "GB", price: 0.0463 },
  { iso: "SG", price: 0.0435 },
  { iso: "PL", price: 0.0431 },
  { iso: "PR", price: 0.042 },
  { iso: "CR", price: 0.042 },
  { iso: "GL", price: 0.041 },
  { iso: "CN", price: 0.0386 },
  { iso: "SC", price: 0.0372 },
  { iso: "BH", price: 0.0364 },
  { iso: "LI", price: 0.0334 },
  { iso: "TH", price: 0.0305 },
  { iso: "TR", price: 0.0305 },
  { iso: "NF", price: 0.02817 },
  { iso: "BN", price: 0.02 },
  { iso: "VI", price: 0.02 },
  { iso: "US", price: 0.0079 },
  { iso: "CA", price: 0.0079 },
];

const unknownPrice = 0.1;

const prefixes = [
  {
    iso: "DO",
    prefix: "1849",
  },
  {
    iso: "AS",
    prefix: "1684",
  },
  {
    iso: "AI",
    prefix: "1264",
  },
  {
    iso: "AG",
    prefix: "1268",
  },
  {
    iso: "BS",
    prefix: "1242",
  },
  {
    iso: "BB",
    prefix: "1246",
  },
  {
    iso: "BM",
    prefix: "1441",
  },
  {
    iso: "VG",
    prefix: "1284",
  },
  {
    iso: "KY",
    prefix: "1345",
  },
  {
    iso: "DM",
    prefix: "1767",
  },
  {
    iso: "DO",
    prefix: "1809",
  },
  {
    iso: "DO",
    prefix: "1829",
  },
  {
    iso: "GD",
    prefix: "1473",
  },
  {
    iso: "GU",
    prefix: "1671",
  },
  {
    iso: "VA",
    prefix: "3906",
  },
  {
    iso: "JM",
    prefix: "1876",
  },
  {
    iso: "MS",
    prefix: "1664",
  },
  {
    iso: "MP",
    prefix: "1670",
  },
  {
    iso: "KN",
    prefix: "1869",
  },
  {
    iso: "LC",
    prefix: "1758",
  },
  {
    iso: "VC",
    prefix: "1784",
  },
  {
    iso: "SX",
    prefix: "1721",
  },
  {
    iso: "TT",
    prefix: "1868",
  },
  {
    iso: "TC",
    prefix: "1649",
  },
  {
    iso: "VI",
    prefix: "1340",
  },
  {
    iso: "TW",
    prefix: "886",
  },
  {
    iso: "AL",
    prefix: "355",
  },
  {
    iso: "DZ",
    prefix: "213",
  },
  {
    iso: "AD",
    prefix: "376",
  },
  {
    iso: "AO",
    prefix: "244",
  },
  {
    iso: "AQ",
    prefix: "672",
  },
  {
    iso: "AM",
    prefix: "374",
  },
  {
    iso: "AW",
    prefix: "297",
  },
  {
    iso: "AZ",
    prefix: "994",
  },
  {
    iso: "BH",
    prefix: "973",
  },
  {
    iso: "BD",
    prefix: "880",
  },
  {
    iso: "BY",
    prefix: "375",
  },
  {
    iso: "BZ",
    prefix: "501",
  },
  {
    iso: "BJ",
    prefix: "229",
  },
  {
    iso: "BT",
    prefix: "975",
  },
  {
    iso: "BO",
    prefix: "591",
  },
  {
    iso: "BQ",
    prefix: "599",
  },
  {
    iso: "BA",
    prefix: "387",
  },
  {
    iso: "BW",
    prefix: "267",
  },
  {
    iso: "IO",
    prefix: "246",
  },
  {
    iso: "BN",
    prefix: "673",
  },
  {
    iso: "BG",
    prefix: "359",
  },
  {
    iso: "BF",
    prefix: "226",
  },
  {
    iso: "BI",
    prefix: "257",
  },
  {
    iso: "CV",
    prefix: "238",
  },
  {
    iso: "KH",
    prefix: "855",
  },
  {
    iso: "CM",
    prefix: "237",
  },
  {
    iso: "CF",
    prefix: "236",
  },
  {
    iso: "TD",
    prefix: "235",
  },
  {
    iso: "HK",
    prefix: "852",
  },
  {
    iso: "MO",
    prefix: "853",
  },
  {
    iso: "KM",
    prefix: "269",
  },
  {
    iso: "CG",
    prefix: "242",
  },
  {
    iso: "CK",
    prefix: "682",
  },
  {
    iso: "CR",
    prefix: "506",
  },
  {
    iso: "HR",
    prefix: "385",
  },
  {
    iso: "CW",
    prefix: "599",
  },
  {
    iso: "CY",
    prefix: "357",
  },
  {
    iso: "CZ",
    prefix: "420",
  },
  {
    iso: "CI",
    prefix: "225",
  },
  {
    iso: "KP",
    prefix: "850",
  },
  {
    iso: "CD",
    prefix: "243",
  },
  {
    iso: "DJ",
    prefix: "253",
  },
  {
    iso: "EC",
    prefix: "593",
  },
  {
    iso: "SV",
    prefix: "503",
  },
  {
    iso: "GQ",
    prefix: "240",
  },
  {
    iso: "ER",
    prefix: "291",
  },
  {
    iso: "EE",
    prefix: "372",
  },
  {
    iso: "SZ",
    prefix: "268",
  },
  {
    iso: "ET",
    prefix: "251",
  },
  {
    iso: "FK",
    prefix: "500",
  },
  {
    iso: "FO",
    prefix: "298",
  },
  {
    iso: "FJ",
    prefix: "679",
  },
  {
    iso: "FI",
    prefix: "358",
  },
  {
    iso: "GF",
    prefix: "594",
  },
  {
    iso: "PF",
    prefix: "689",
  },
  {
    iso: "TF",
    prefix: "262",
  },
  {
    iso: "GA",
    prefix: "241",
  },
  {
    iso: "GM",
    prefix: "220",
  },
  {
    iso: "GE",
    prefix: "995",
  },
  {
    iso: "GH",
    prefix: "233",
  },
  {
    iso: "GI",
    prefix: "350",
  },
  {
    iso: "GL",
    prefix: "299",
  },
  {
    iso: "GP",
    prefix: "590",
  },
  {
    iso: "GT",
    prefix: "502",
  },
  {
    iso: "GN",
    prefix: "224",
  },
  {
    iso: "GW",
    prefix: "245",
  },
  {
    iso: "GY",
    prefix: "592",
  },
  {
    iso: "HT",
    prefix: "509",
  },
  {
    iso: "HM",
    prefix: "672",
  },
  {
    iso: "HN",
    prefix: "504",
  },
  {
    iso: "IS",
    prefix: "354",
  },
  {
    iso: "IQ",
    prefix: "964",
  },
  {
    iso: "IE",
    prefix: "353",
  },
  {
    iso: "IL",
    prefix: "972",
  },
  {
    iso: "JO",
    prefix: "962",
  },
  {
    iso: "KE",
    prefix: "254",
  },
  {
    iso: "KI",
    prefix: "686",
  },
  {
    iso: "KW",
    prefix: "965",
  },
  {
    iso: "KG",
    prefix: "996",
  },
  {
    iso: "LA",
    prefix: "856",
  },
  {
    iso: "LV",
    prefix: "371",
  },
  {
    iso: "LB",
    prefix: "961",
  },
  {
    iso: "LS",
    prefix: "266",
  },
  {
    iso: "LR",
    prefix: "231",
  },
  {
    iso: "LY",
    prefix: "218",
  },
  {
    iso: "LI",
    prefix: "423",
  },
  {
    iso: "LT",
    prefix: "370",
  },
  {
    iso: "LU",
    prefix: "352",
  },
  {
    iso: "MG",
    prefix: "261",
  },
  {
    iso: "MW",
    prefix: "265",
  },
  {
    iso: "MV",
    prefix: "960",
  },
  {
    iso: "ML",
    prefix: "223",
  },
  {
    iso: "MT",
    prefix: "356",
  },
  {
    iso: "MH",
    prefix: "692",
  },
  {
    iso: "MQ",
    prefix: "596",
  },
  {
    iso: "MR",
    prefix: "222",
  },
  {
    iso: "MU",
    prefix: "230",
  },
  {
    iso: "YT",
    prefix: "262",
  },
  {
    iso: "FM",
    prefix: "691",
  },
  {
    iso: "MC",
    prefix: "377",
  },
  {
    iso: "MN",
    prefix: "976",
  },
  {
    iso: "ME",
    prefix: "382",
  },
  {
    iso: "MA",
    prefix: "212",
  },
  {
    iso: "MZ",
    prefix: "258",
  },
  {
    iso: "NA",
    prefix: "264",
  },
  {
    iso: "NR",
    prefix: "674",
  },
  {
    iso: "NP",
    prefix: "977",
  },
  {
    iso: "NC",
    prefix: "687",
  },
  {
    iso: "NI",
    prefix: "505",
  },
  {
    iso: "NE",
    prefix: "227",
  },
  {
    iso: "NG",
    prefix: "234",
  },
  {
    iso: "NU",
    prefix: "683",
  },
  {
    iso: "NF",
    prefix: "672",
  },
  {
    iso: "OM",
    prefix: "968",
  },
  {
    iso: "PW",
    prefix: "680",
  },
  {
    iso: "PA",
    prefix: "507",
  },
  {
    iso: "PG",
    prefix: "675",
  },
  {
    iso: "PY",
    prefix: "595",
  },
  {
    iso: "PN",
    prefix: "870",
  },
  {
    iso: "PT",
    prefix: "351",
  },
  {
    iso: "QA",
    prefix: "974",
  },
  {
    iso: "MD",
    prefix: "373",
  },
  {
    iso: "RW",
    prefix: "250",
  },
  {
    iso: "RE",
    prefix: "262",
  },
  {
    iso: "BL",
    prefix: "590",
  },
  {
    iso: "SH",
    prefix: "290",
  },
  {
    iso: "MF",
    prefix: "590",
  },
  {
    iso: "PM",
    prefix: "508",
  },
  {
    iso: "WS",
    prefix: "685",
  },
  {
    iso: "SM",
    prefix: "378",
  },
  {
    iso: "ST",
    prefix: "239",
  },
  {
    iso: "SA",
    prefix: "966",
  },
  {
    iso: "SN",
    prefix: "221",
  },
  {
    iso: "RS",
    prefix: "381",
  },
  {
    iso: "SC",
    prefix: "248",
  },
  {
    iso: "SL",
    prefix: "232",
  },
  {
    iso: "SK",
    prefix: "421",
  },
  {
    iso: "SI",
    prefix: "386",
  },
  {
    iso: "SB",
    prefix: "677",
  },
  {
    iso: "SO",
    prefix: "252",
  },
  {
    iso: "GS",
    prefix: "500",
  },
  {
    iso: "SS",
    prefix: "211",
  },
  {
    iso: "PS",
    prefix: "970",
  },
  {
    iso: "SD",
    prefix: "249",
  },
  {
    iso: "SR",
    prefix: "597",
  },
  {
    iso: "SY",
    prefix: "963",
  },
  {
    iso: "TJ",
    prefix: "992",
  },
  {
    iso: "MK",
    prefix: "389",
  },
  {
    iso: "TL",
    prefix: "670",
  },
  {
    iso: "TG",
    prefix: "228",
  },
  {
    iso: "TK",
    prefix: "690",
  },
  {
    iso: "TO",
    prefix: "676",
  },
  {
    iso: "TN",
    prefix: "216",
  },
  {
    iso: "TM",
    prefix: "993",
  },
  {
    iso: "TV",
    prefix: "688",
  },
  {
    iso: "UG",
    prefix: "256",
  },
  {
    iso: "UA",
    prefix: "380",
  },
  {
    iso: "AE",
    prefix: "971",
  },
  {
    iso: "TZ",
    prefix: "255",
  },
  {
    iso: "UY",
    prefix: "598",
  },
  {
    iso: "UZ",
    prefix: "998",
  },
  {
    iso: "VU",
    prefix: "678",
  },
  {
    iso: "WF",
    prefix: "681",
  },
  {
    iso: "EH",
    prefix: "212",
  },
  {
    iso: "YE",
    prefix: "967",
  },
  {
    iso: "ZM",
    prefix: "260",
  },
  {
    iso: "ZW",
    prefix: "263",
  },
  {
    iso: "AX",
    prefix: "358",
  },
  {
    iso: "AF",
    prefix: "93",
  },
  {
    iso: "AR",
    prefix: "54",
  },
  {
    iso: "AU",
    prefix: "61",
  },
  {
    iso: "AT",
    prefix: "43",
  },
  {
    iso: "BE",
    prefix: "32",
  },
  {
    iso: "BV",
    prefix: "47",
  },
  {
    iso: "BR",
    prefix: "55",
  },
  {
    iso: "CL",
    prefix: "56",
  },
  {
    iso: "CN",
    prefix: "86",
  },
  {
    iso: "CX",
    prefix: "61",
  },
  {
    iso: "CC",
    prefix: "61",
  },
  {
    iso: "CO",
    prefix: "57",
  },
  {
    iso: "CU",
    prefix: "53",
  },
  {
    iso: "DK",
    prefix: "45",
  },
  {
    iso: "EG",
    prefix: "20",
  },
  {
    iso: "FR",
    prefix: "33",
  },
  {
    iso: "DE",
    prefix: "49",
  },
  {
    iso: "GR",
    prefix: "30",
  },
  {
    iso: "HU",
    prefix: "36",
  },
  {
    iso: "IN",
    prefix: "91",
  },
  {
    iso: "ID",
    prefix: "62",
  },
  {
    iso: "IR",
    prefix: "98",
  },
  {
    iso: "IM",
    prefix: "44",
  },
  {
    iso: "IT",
    prefix: "39",
  },
  {
    iso: "JP",
    prefix: "81",
  },
  {
    iso: "JE",
    prefix: "44",
  },
  {
    iso: "MY",
    prefix: "60",
  },
  {
    iso: "MX",
    prefix: "52",
  },
  {
    iso: "MM",
    prefix: "95",
  },
  {
    iso: "NL",
    prefix: "31",
  },
  {
    iso: "NZ",
    prefix: "64",
  },
  {
    iso: "NO",
    prefix: "47",
  },
  {
    iso: "PK",
    prefix: "92",
  },
  {
    iso: "PE",
    prefix: "51",
  },
  {
    iso: "PH",
    prefix: "63",
  },
  {
    iso: "PL",
    prefix: "48",
  },
  {
    iso: "KR",
    prefix: "82",
  },
  {
    iso: "RO",
    prefix: "40",
  },
  {
    iso: "SG",
    prefix: "65",
  },
  {
    iso: "ZA",
    prefix: "27",
  },
  {
    iso: "ES",
    prefix: "34",
  },
  {
    iso: "LK",
    prefix: "94",
  },
  {
    iso: "SJ",
    prefix: "47",
  },
  {
    iso: "SE",
    prefix: "46",
  },
  {
    iso: "CH",
    prefix: "41",
  },
  {
    iso: "TH",
    prefix: "66",
  },
  {
    iso: "TR",
    prefix: "90",
  },
  {
    iso: "GB",
    prefix: "44",
  },
  {
    iso: "GG",
    prefix: "44",
  },
  {
    iso: "VE",
    prefix: "58",
  },
  {
    iso: "VN",
    prefix: "84",
  },
  {
    iso: "CA",
    prefix: "1",
  },
  {
    iso: "KZ",
    prefix: "7",
  },
  {
    iso: "PR",
    prefix: "1",
  },
  {
    iso: "RU",
    prefix: "7",
  },
  {
    iso: "US",
    prefix: "1",
  },
];

export const countryByNumber = (number: string) => {
  const cleannumber = number.replace("+", "");
  const country = prefixes
    .sort((a, b) => b.prefix.length - a.prefix.length)
    .find((p) => cleannumber.startsWith(p.prefix));

  const all_countries = prefixes
    .filter((p) => p.prefix === country?.prefix)
    .map((p) => p.iso);

  if (!all_countries?.length) {
    return "Unknown";
  }

  return all_countries.join(", ");
};

export const priceByNumber = (number: string) => {
  const cleannumber = number.replace("+", "");
  const country = prefixes
    .sort((a, b) => b.prefix.length - a.prefix.length)
    .find((p) => cleannumber.startsWith(p.prefix));

  const all_countries = prefixes
    .filter((p) => p.prefix === country?.prefix)
    .map((p) => p.iso);

  if (!all_countries?.length) {
    return unknownPrice;
  }

  const prices = pricing
    .filter((p) => all_countries.includes(p.iso))
    .map((p) => p.price);

  if (!prices.length) {
    return unknownPrice;
  }

  return Math.max(...prices);
};

export type Pricing = {
  mobile: string;
  country: string;
  price: number;
  status: "ready" | "queued" | "sent" | "failed";
  error?: string;
};

export const round = (number: number) => Math.ceil(number * 100) / 100;

export const segments = (text: string) => {
  if (text.length <= 160) return 1;
  return Math.ceil(text.length / 160);
};
