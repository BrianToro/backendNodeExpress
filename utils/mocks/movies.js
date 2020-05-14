const moviesMock = [
    {
        "id": "81e6a543-8c9d-45a6-ab91-62a97f61e394",
        "title": "Out California Way",
        "year": 2006,
        "cover": "http://dummyimage.com/215x210.jpg/cc0000/ffffff",
        "description": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
        "contentRating": "R",
        "source": "https://irs.gov/molestie/sed.png",
        "tag": "Western"
    },
    {
        "id": "fd5ae22b-c474-498b-9c84-70172c90fa88",
        "title": "Support Your Local Sheriff!",
        "year": 2005,
        "cover": "http://dummyimage.com/249x167.bmp/ff4444/ffffff",
        "description": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
        "contentRating": "NC-17",
        "source": "https://infoseek.co.jp/eget.aspx",
        "tag": "Comedy|Western"
    },
    {
        "id": "64ab8717-a33d-4398-8c9d-f039197774db",
        "title": "Tarzan",
        "year": 2004,
        "cover": "http://dummyimage.com/116x151.png/dddddd/000000",
        "description": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
        "contentRating": "PG+13",
        "source": "http://ebay.com/volutpat.png",
        "tag": "Adventure|Animation|Children|Drama"
    },
    {
        "id": "65233151-4345-41f1-a4f9-5183939641a9",
        "title": "Kagerô-za",
        "year": 1989,
        "cover": "http://dummyimage.com/198x171.bmp/cc0000/ffffff",
        "description": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
        "contentRating": "R",
        "source": "https://rediff.com/orci/nullam/molestie.xml",
        "tag": "Fantasy|Romance|Thriller"
    },
    {
        "id": "03d3ad17-9320-423a-94b3-ceb072c3b5ba",
        "title": "Vacancy 2: The First Cut",
        "year": 2012,
        "cover": "http://dummyimage.com/154x142.bmp/ff4444/ffffff",
        "description": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
        "contentRating": "NC-17",
        "source": "https://archive.org/nisi/vulputate/nonummy/maecenas/tincidunt.aspx",
        "tag": "Horror|Thriller"
    },
    {
        "id": "821c6508-5ddd-43a5-8200-98675d9eca88",
        "title": "Murderer Lives at Number 21, The (L'assassin habite... au 21)",
        "year": 1995,
        "cover": "http://dummyimage.com/119x188.jpg/ff4444/ffffff",
        "description": "Fusce consequat. Nulla nisl. Nunc nisl.",
        "contentRating": "PG+13",
        "source": "http://1688.com/quam/suspendisse/potenti/nullam/porttitor/lacus.js",
        "tag": "Comedy|Mystery|Thriller"
    },
    {
        "id": "d35df246-faa9-4f97-9399-836be82db26b",
        "title": "Abyss, The",
        "year": 1995,
        "cover": "http://dummyimage.com/224x145.jpg/dddddd/000000",
        "description": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
        "contentRating": "R",
        "source": "http://opera.com/ut/rhoncus/aliquet.aspx",
        "tag": "Action|Adventure|Sci-Fi|Thriller"
    },
    {
        "id": "f4c0f0c6-42ad-47ea-8eb5-5ea1b03b8613",
        "title": "Paan Singh Tomar",
        "year": 2003,
        "cover": "http://dummyimage.com/144x142.bmp/5fa2dd/ffffff",
        "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
        "contentRating": "NC-17",
        "source": "https://utexas.edu/auctor.js",
        "tag": "Crime"
    },
    {
        "id": "ff5c4bfc-49db-4335-badf-0c2f5c4cd41f",
        "title": "Sirocco",
        "year": 2008,
        "cover": "http://dummyimage.com/173x166.png/ff4444/ffffff",
        "description": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
        "contentRating": "NC-17",
        "source": "http://ox.ac.uk/odio/donec/vitae/nisi.xml",
        "tag": "Action|Drama"
    },
    {
        "id": "ac870241-fda1-4b56-abc8-425baa4b3313",
        "title": "On Any Sunday",
        "year": 2008,
        "cover": "http://dummyimage.com/105x222.bmp/dddddd/000000",
        "description": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
        "contentRating": "NC-17",
        "source": "http://lycos.com/quam/nec/dui/luctus/rutrum.png",
        "tag": "Documentary"
    }
];

module.exports = {
    moviesMock
}