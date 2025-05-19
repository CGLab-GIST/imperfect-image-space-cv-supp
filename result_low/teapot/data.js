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
                    "title": "CV (polynomials)",
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
                    "title": "CV (polynomials)",
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
                "CV (polynomials)",
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
                        "0.005813",
                        "0.004538",
                        "0.000628"
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
                "CV (polynomials)",
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
                        "0.001469",
                        "0.001066",
                        "0.000173"
                    ]
                }
            ]
        }
    ]
}