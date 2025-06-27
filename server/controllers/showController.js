


export const getNowPlayingMovies = async (req, res) => {
    try {
        const movies = await Movie.find({}).sort({ release_date: -1 }).limit(10);
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}