movies = [
    {"name": "Inception", "reviews": [10, 8, 9, 9, 5]},
    {"name": "The Matrix", "reviews": [10, 9, 10, 8, 9]},
    {"name": "Interstellar", "reviews": [9, 9, 10, 8, 8]},
    {"name": "The Shawshank Redemption", "reviews": [10, 10, 10, 9, 10]},
    {"name": "Parasite", "reviews": [9, 10, 9, 9, 10]},
    {"name": "The Godfather", "reviews": [10, 10, 10, 10, 10]},
    {"name": "Pulp Fiction", "reviews": [9, 9, 9, 8, 8]},
    {"name": "Fight Club", "reviews": [9, 9, 8, 9, 7]},
    {"name": "The Dark Knight", "reviews": [10, 9, 9, 10, 10]},
    {"name": "Forrest Gump", "reviews": [10, 9, 9, 10, 9]},
]

for i in range(len(movies)):
    reviews = movies[i]["reviews"]
    length = len(reviews)
    total =0
    for t in range(length):
        total+=t
    average = total/length
    print(average)
