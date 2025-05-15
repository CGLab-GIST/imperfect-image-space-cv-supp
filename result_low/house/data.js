const data =
{
    "imageBoxes": [
        {
            "title": "Short-term rendering",
            "elements": [
                {
                    "title": "PT",
                    "version": "-",
                    "image": "images/192spp/pt.png"
                },
                {
                    "title": "RegMC",
                    "version": "-",
                    "image": "images/192spp/regmc.png"
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
                    "title": "PT",
                    "version": "-",
                    "image": "images/768spp/pt.png"
                },
                {
                    "title": "RegMC",
                    "version": "-",
                    "image": "images/768spp/regmc.png"
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
                "PT",
                "RegMC",
                "Ours"
            ],
            "series": [
				{
                    "label": "spp",
                    "data": [
                        "192",
                        "192",
                        "192"
                    ]
                },
                {
                    "label": "relMSE",
                    "data": [
                        "0.004198",
                        "0.003173",
                        "0.001194"
                    ]
                }
            ]
        }
    ],
    "stats_long": [
        {
            "title": "long-term rendering",
            "labels": [
                "PT",
                "RegMC",
                "Ours"
            ],
            "series": [
				{
                    "label": "spp",
                    "data": [
                        "768",
                        "768",
                        "768"
                    ]
                },
                {
                    "label": "relMSE",
                    "data": [
                        "0.001064",
                        "0.000732",
                        "0.000277"
                    ]
                }
            ]
        }
    ]
}