categories = ['Games', 'Health & Fitness', 'Business', 'Lifestyle', 'Entertainment', 'Sports']
featured = [true, false]

100.times do
  Post.create(
    author: Faker::Simpsons.character,
    description: Faker::Simpsons.quote,
    picture: Faker::Avatar.image,
  )
end