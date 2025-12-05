const data =
{
    "imageBoxes": [
        {
            "title": "Results (192 spp)",
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
            "title": "Results (1536 spp)",
            "elements": [
                {
                    "title": "PT",
                    "version": "-",
                    "image": "images/1536spp/pt.png"
                },
                {
                    "title": "CV (polynomials)",
                    "version": "-",
                    "image": "images/1536spp/regmc.png"
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
                        "0.005914",
                        "0.004544",
                        "0.000529"
                    ]
                }
            ]
        }
    ],
    "stats_long": [
        {
            "title": "Results (1536 spp)",
            "labels": [
                "PT",
                "CV (polynomials)",
                "Ours"
            ],
            "series": [
				{
                    "label": "spp",
                    "data": [
                        "1536",
                        "1536",
                        "1536"
                    ]
                },
                {
                    "label": "relMSE",
                    "data": [
                        "0.000755",
                        "0.000536",
                        "0.000087"
                    ]
                }
            ]
        }
    ]
}