const busdata = [
    {
        "busNumber": "1",
        "start": 25,
        "end": 56,
        "stops": [25,69,35,33,60,8,26,4,53,3,29,56]
    },
    {
        "busNumber": "1G",
        "start": 18,
        "end": 30,
        "stops": [35,6,60,26,4,53,3,31,56,30]
    },
    {
        "busNumber": "2",
        "start": 28,
        "end": 62,
        "stops": [33,71,9,50,7,37,5,61,73,34,67,12,43,68,1,39,51,21,20,22,15,57,65,62]
    },
    {
        "busNumber": "2K",
        "start": 28,
        "end": 30,
        "stops": [28,30]
    },
    {
        "busNumber": "3",
        "start": 27,
        "end": 19,
        "stops": [27,19]
    },
    {
        "busNumber": "3D",
        "start": 45,
        "end": 13,
        "stops": [45,13]
    },
    {
        "busNumber": "5",
        "start": 27,
        "end": 2,
        "stops": [27,33,71,9,50,7,5,58,64,4,53,2]
    },
    {
        "busNumber": "5G",
        "start": 28,
        "end": 2,
        "stops": [33,71,9,50,7,5,58,64,23,2]
    },
    {
        "busNumber": "5 SG",
        "start": 60,
        "end": 2,
        "stops": [60,50,5,58,64,23,2]
    },
    {
        "busNumber": "7A",
        "start": 28,
        "end": 55,
        "stops": [28,8,26,4,53,3,55]
    },
    {
        "busNumber": "7R",
        "start": 45,
        "end": 78,
        "stops": [45,33,50,8,26,4,53,3,78]
    },
    {
        "busNumber": "10",
        "start": 60,
        "end": 54,
        "stops": [60,8,26,4,53,3,31,56,54]
    },
    {
        "busNumber": "10 C",
        "start": 60,
        "end": 11,
        "stops": [60,8,26,4,53,3,31,56,11]
    },
    {
        "busNumber": "11",
        "start": 45,
        "end": 2,
        "stops": [45,33,71,9,50,7,37,5,61,73,34,67,12,43,68,1,39,51,21,20,22,15,57,65,62,64,4,53,2]
    },
    {
        "busNumber": "11H",
        "start": 27,
        "end": 2,
        "stops": [27,33,71,9,50,7,37,5,61,73,34,67,12,43,68,1,39,51,21,20,22,15,57,65,62,64,4,53,2]
    },
    {
        "busNumber": "14 S",
        "start": 76,
        "end": 38,
        "stops": [76,38]
    },
    {
        "busNumber": "14 E",
        "start": 14,
        "end": 66,
        "stops": [14,66]
    },
    {
        "busNumber": "16 M",
        "start": 75,
        "end": 20,
        "stops": [75,20]
    },
    {
        "busNumber": "16 R",
        "start": 28,
        "end": 41,
        "stops": [28,41]
    },
    {
        "busNumber": "20",
        "start": 38,
        "end": 40,
        "stops": [38,40]
    },
    {
        "busNumber": "23",
        "start": 28,
        "end": 54,
        "stops": [33,50,8,26,4,53,3,31,56,54]
    },
    {
        "busNumber": "23 A",
        "start": 16,
        "end": 17,
        "stops": [60,8,26,4,53,3,31,56,17]
    },
    {
        "busNumber": "23 K",
        "start": 28,
        "end": 32,
        "stops": [33,50,8,26,4,53,3,31,56,32]
    },
    {
        "busNumber": "26 H",
        "start": 24,
        "end": 2,
        "stops": [24,33,50,8,26,4,53,2]
    },
    {
        "busNumber": "28 B",
        "start": 52,
        "end": 52,
        "stops": [52,60,7,59,4,64,74,48,63,43,73,60,52]
    },
    {
        "busNumber": "28 E",
        "start": 52,
        "end": 52,
        "stops": [52,60,73,43,63,74,64,4,59,60,52]
    },
    {
        "busNumber": "29",
        "start": 28,
        "end": 2,
        "stops": [28,2]
    },
    {
        "busNumber": "31",
        "start": 45,
        "end": 2,
        "stops": [45,33,50,8,26,4,53,2]
    },
    {
        "busNumber": "31 A",
        "start": 45,
        "end": 70,
        "stops": [45,33,50,8,26,4,53,2,29,70]
    },
    {
        "busNumber": "31 H",
        "start": 24,
        "end": 2,
        "stops": [24,33,50,8,26,4,53,2]
    },
    {
        "busNumber": "41 V",
        "start": 75,
        "end": 2,
        "stops": [75,2]
    },
    {
        "busNumber": "47 H",
        "start": 60,
        "end": 10,
        "stops": [60,50,72,42,40,10]
    },
    {
        "busNumber": "47 N",
        "start": 28,
        "end": 46,
        "stops": [28,50,72,42,40,46]
    },
    {
        "busNumber": "47 V",
        "start": 60,
        "end": 40,
        "stops": [60,50,72,42,40]
    },
    {
        "busNumber": "48 K",
        "start": 47,
        "end": 2,
        "stops": [47,2]
    },
    {
        "busNumber": "48 N",
        "start": 2,
        "end": 49,
        "stops": [2,8,49]
    },
    {
        "busNumber": "48 V",
        "start": 2,
        "end": 75,
        "stops": [2,8,75]
    },
    {
        "busNumber": "49",
        "start": 28,
        "end": 49,
        "stops": [28,50,49]
    },
    {
        "busNumber": "49 M",
        "start": 28,
        "end": 41,
        "stops": [28,41]
    },
    {
        "busNumber": "49 P",
        "start": 28,
        "end": 36,
        "stops": [28,50,36]
    },
    {
        "busNumber": "54",
        "start": 60,
        "end": 2,
        "stops": [60,73,43,63,74,64,4,53,2]
    },
    {
        "busNumber": "55",
        "start": 28,
        "end": 30,
        "stops": [33,50,59,4,53,2,29,30]
    },
    {
        "busNumber": "55 S",
        "start": 60,
        "end": 30,
        "stops": [60,50,59,4,53,2,29,30]
    },
    {
        "busNumber": "77",
        "start": 28,
        "end": 62,
        "stops": [28,50,62]
    },
    {
        "busNumber": "77 S",
        "start": 60,
        "end": 62,
        "stops": [60,62]
    },
    {
        "busNumber": "79 E",
        "start": 77,
        "end": 49,
        "stops": [77,50,62,49]
    },
    {
        "busNumber": "79 B",
        "start": 77,
        "end": 56,
        "stops": [77,50,8,56]
    },
    {
        "busNumber": "112 A",
        "start": 28,
        "end": 28,
        "stops": [28]
    },
    {
        "busNumber": "116",
        "start": 28,
        "end": 30,
        "stops": [33,63,49,30]
    },
    {
        "busNumber": "116 K",
        "start": 28,
        "end": 60,
        "stops": [28,60]
    },
    {
        "busNumber": "121",
        "start": 60,
        "end": 54,
        "stops": [60,26,4,53,3,29,56,54]
    },
    {
        "busNumber": "122",
        "start": 28,
        "end": 54,
        "stops": [33,50,26,4,53,3,29,56,54]
    },
    {
        "busNumber": "123",
        "start": 27,
        "end": 30,
        "stops": [27,4,30]
    },
    {
        "busNumber": "140",
        "start": 28,
        "end": 20,
        "stops": [33,50,8,20]
    },
    {
        "busNumber": "141",
        "start": 28,
        "end": 20,
        "stops": [33,60,50,8,20]
    },
    {
        "busNumber": "144",
        "start": 27,
        "end": 2,
        "stops": [27,50,8,4,2]
    },
    {
        "busNumber": "145",
        "start": 27,
        "end": 49,
        "stops": [27,50,62,49]
    },
    {
        "busNumber": "150",
        "start": 27,
        "end": 30,
        "stops": [27,50,8,4,30]
    },
    {
        "busNumber": "152",
        "start": 60,
        "end": 60,
        "stops": [60]
    },
    {
        "busNumber": "154",
        "start": 28,
        "end": 30,
        "stops": [28,8,30]
    },
    {
        "busNumber": "188",
        "start": 27,
        "end": 30,
        "stops": [27,62,30]
    },
    {
        "busNumber": "201 C",
        "start": 28,
        "end": 28,
        "stops": [28]
    },
    {
        "busNumber": "201 T",
        "start": 28,
        "end": 28,
        "stops": [28]
    },
    {
        "busNumber": "201 0",
        "start": 28,
        "end": 28,
        "stops": [28]
    },
    {
        "busNumber": "203 C",
        "start": 28,
        "end": 28,
        "stops": [28]
    },
    {
        "busNumber": "203 K",
        "start": 28,
        "end": 28,
        "stops": [28]
    },
    {
        "busNumber": "203 T",
        "start": 28,
        "end": 28,
        "stops": [28]
    },
    {
        "busNumber": "208",
        "start": 28,
        "end": 28,
        "stops": [28]
    },
    {
        "busNumber": "209",
        "start": 28,
        "end": 28,
        "stops": [28]
    },
    {
        "busNumber": "209 A",
        "start": 28,
        "end": 28,
        "stops": [28]
    },
    {
        "busNumber": "209 T",
        "start": 28,
        "end": 28,
        "stops": [28]
    },
    {
        "busNumber": "211",
        "start": 28,
        "end": 28,
        "stops": [28]
    },
    {
        "busNumber": "212",
        "start": 28,
        "end": 28,
        "stops": [28]
    },
    {
        "busNumber": "212 P",
        "start": 28,
        "end": 28,
        "stops": [28]
    },
    {
        "busNumber": "212 S",
        "start": 28,
        "end": 28,
        "stops": [28]
    },
    {
        "busNumber": "212 M",
        "start": 28,
        "end": 28,
        "stops": [28]
    },
    {
        "busNumber": "215 S",
        "start": 60,
        "end": 60,
        "stops": [60]
    },
    {
        "busNumber": "218 M",
        "start": 9,
        "end": 9,
        "stops": [9]
    },
    {
        "busNumber": "220",
        "start": 28,
        "end": 28,
        "stops": [28]
    },
    {
        "busNumber": "222",
        "start": 28,
        "end": 28,
        "stops": [28]
    },
    {
        "busNumber": "223 M",
        "start": 28,
        "end": 28,
        "stops": [28]
    },
    {
        "busNumber": "226",
        "start": 9,
        "end": 9,
        "stops": [9]
    },
    {
        "busNumber": "239",
        "start": 28,
        "end": 28,
        "stops": [28]
    },
    {
        "busNumber": "241",
        "start": 30,
        "end": 30,
        "stops": [30]
    },
    {
        "busNumber": "248",
        "start": 28,
        "end": 30,
        "stops": [28,8,30]
    },
    {
        "busNumber": "250 V",
        "start": 28,
        "end": 28,
        "stops": [28]
    },
    {
        "busNumber": "252",
        "start": 28,
        "end": 28,
        "stops": [28]
    },
    {
        "busNumber": "252 B",
        "start": 28,
        "end": 28,
        "stops": [28]
    },
    {
        "busNumber": "257",
        "start": 60,
        "end": 60,
        "stops": [60]
    },
    {
        "busNumber": "266",
        "start": 28,
        "end": 28,
        "stops": [28]
    },
    {
        "busNumber": "305 M",
        "start": 28,
        "end": 28,
        "stops": [28]
    },
    {
        "busNumber": "308",
        "start": 28,
        "end": 28,
        "stops": [28]
    },
    {
        "busNumber": "309",
        "start": 25,
        "end": 25,
        "stops": [25]
    },
    {
        "busNumber": "309 R",
        "start": 25,
        "end": 25,
        "stops": [25]
    },
    {
        "busNumber": "333",
        "start": 28,
        "end": 28,
        "stops": [28]
    },
    {
        "busNumber":"350",
        "start": 28,
        "end": 28,
        "stops": [28]
    },
    {
        "busNumber": "99",
        "start": 60,
        "end": 30,
        "stops": [60,66,8,63,4,56,30]
    }
]

export default busdata