document.getElementById('refreshButton').addEventListener('click', function() {
    var proverbs = [
        "The Shawshank Redemption (1994) - IMDb Rating: 9.3/10",
        "The Godfather (1972) - IMDb Rating: 9.2/10",
        "The Godfather: Part II (1974) - IMDb Rating: 9.0/10",
        "The Dark Knight (2008) - IMDb Rating: 9.0/10",
        "12 Angry Men (1957) - IMDb Rating: 9.0/10",
        "Schindler's List (1993) - IMDb Rating: 8.9/10",
        "The Lord of the Rings: The Return of the King (2003) - IMDb Rating: 8.9/10",
        "Pulp Fiction (1994) - IMDb Rating: 8.9/10",
        "The Good, the Bad and the Ugly (1966) - IMDb Rating: 8.8/10",
        "Fight Club (1999) - IMDb Rating: 8.8/10",
        "Forrest Gump (1994) - IMDb Rating: 8.8/10",
        "Inception (2010) - IMDb Rating: 8.8/10",
        "The Lord of the Rings: The Fellowship of the Ring (2001) - IMDb Rating: 8.8/10",
        "Star Wars: Episode V - The Empire Strikes Back (1980) - IMDb Rating: 8.7/10",
        "The Matrix (1999) - IMDb Rating: 8.7/10",
        "Goodfellas (1990) - IMDb Rating: 8.7/10",
        "One Flew Over the Cuckoo's Nest (1975) - IMDb Rating: 8.7/10",
        "Seven Samurai (1954) - IMDb Rating: 8.6/10",
        "Se7en (1995) - IMDb Rating: 8.6/10",
        "City of God (2002) - IMDb Rating: 8.6/10"
    ];
    var randomIndex = Math.floor(Math.random() * proverbs.length);
    document.getElementById('quote').textContent = proverbs[randomIndex];
});