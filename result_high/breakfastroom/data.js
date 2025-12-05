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
                        "0.069860",
                        "0.059336",
                        "0.008581",
                        "0.010793",
                        "0.002403"
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
                        "0.009698",
                        "0.007567",
                        "0.001408",
                        "0.001219",
                        "0.000584"
                    ]
                }
            ]
        }
    ]
}