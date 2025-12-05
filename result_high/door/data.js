const data =
{
    "imageBoxes": [
        {
            "title": "Results (192 spp)",
            "elements": [
                {
                    "title": "Input (CRN)",
                    "version": "-",
                    "image": "images/192spp/ptInCorr.png"
                },
                {
                    "title": "Input (PT)",
                    "version": "-",
                    "image": "images/192spp/ptInRand.png"
                },
                {
                    "title": "IDUW",
                    "version": "-",
                    "image": "images/192spp/iduw.png"
                },
                {
                    "title": "CV (baseline)",
                    "version": "-",
                    "image": "images/192spp/cv.png"
                },
                {
                    "title": "Ours",
                    "version": "-",
                    "image": "images/192spp/ours.png"
                },
                {
                    "title": "Reference (65K spp)",
                    "version": "-",
                    "image": "images/gt.png"
                }
            ]
        },
        {
            "title": "Results (1536 spp)",
            "elements": [
                {
                    "title": "Input (CRN)",
                    "version": "-",
                    "image": "images/1536spp/ptInCorr.png"
                },
                {
                    "title": "Input (PT)",
                    "version": "-",
                    "image": "images/1536spp/ptInRand.png"
                },
                {
                    "title": "IDUW",
                    "version": "-",
                    "image": "images/1536spp/iduw.png"
                },
                {
                    "title": "CV (baseline)",
                    "version": "-",
                    "image": "images/1536spp/cv.png"
                },
                {
                    "title": "Ours",
                    "version": "-",
                    "image": "images/1536spp/ours.png"
                },
                {
                    "title": "Reference (65K spp)",
                    "version": "-",
                    "image": "images/gt.png"
                }
            ]
        }
    ],
    "stats_short": [
        {
            "title": "Results (192 spp)",
            "labels": [
                "Input (CRN)",
                "Input (PT)",
                "IDUW",
                "CV (baseline)",
                "Ours"
            ],
            "series": [
				{
                    "label": "spp",
                    "data": [
                        "96",
                        "96",
                        "192",
                        "192",
                        "192"
                    ]
                },
                {
                    "label": "relMSE",
                    "data": [
                        "0.420479",
                        "0.483447",
                        "0.058948",
                        "0.104744",
                        "0.020232"
                    ]
                }
            ]
        }
    ],
    "stats_long": [
        {
            "title": "Results (1536 spp)",
            "labels": [
                "Input (CRN)",
                "Input (PT)",
                "IDUW",
                "CV (baseline)",
                "Ours"
            ],
            "series": [
				{
                    "label": "spp",
                    "data": [
                        "768",
                        "768",
                        "1536",
                        "1536",
                        "1536"
                    ]
                },
                {
                    "label": "relMSE",
                    "data": [
                        "0.049961",
                        "0.062038",
                        "0.012434",
                        "0.017253",
                        "0.004835"
                    ]
                }
            ]
        }
    ]
}