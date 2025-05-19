const data =
{
    "imageBoxes": [
        {
            "title": "Short-term rendering",
            "elements": [
                {
                    "title": "Input image (PT)",
                    "version": "-",
                    "image": "images/192spp/ptInRand.png"
                },
                {
                    "title": "Input image (CRN)",
                    "version": "-",
                    "image": "images/192spp/ptInCorr.png"
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
            "title": "Long-term rendering",
            "elements": [
                {
                    "title": "Input image (PT)",
                    "version": "-",
                    "image": "images/768spp/ptInRand.png"
                },
                {
                    "title": "Input image (CRN)",
                    "version": "-",
                    "image": "images/768spp/ptInCorr.png"
                },
                {
                    "title": "IDUW",
                    "version": "-",
                    "image": "images/768spp/iduw.png"
                },
                {
                    "title": "CV (baseline)",
                    "version": "-",
                    "image": "images/768spp/cv.png"
                },
                {
                    "title": "Ours",
                    "version": "-",
                    "image": "images/768spp/ours.png"
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
            "title": "short-term rendering",
            "labels": [
                "Input image (PT)",
                "Input image (CRN)",
                "IDUW",
                "Baseline",
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
                        "0.057526",
                        "0.069672",
                        "0.015527",
                        "0.013296",
                        "0.006611"
                    ]
                }
            ]
        }
    ],
    "stats_long": [
        {
            "title": "long-term rendering",
            "labels": [
                "Input image (PT)",
                "Input image (CRN)",
                "IDUW",
                "Baseline",
                "Ours"
            ],
            "series": [
				{
                    "label": "spp",
                    "data": [
                        "384",
                        "384",
                        "768",
                        "768",
                        "768"
                    ]
                },
                {
                    "label": "relMSE",
                    "data": [
                        "0.014532",
                        "0.015357",
                        "0.004690",
                        "0.003655",
                        "0.002311"
                    ]
                }
            ]
        }
    ]
}