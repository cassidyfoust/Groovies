import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

const mapStateToProps = reduxState => ({
    reduxState,
});

class UserMoviesCarousel extends Component {

    render() {
        return (
            <>
<Carousel className="carousel">
    {this.props.reduxState.userMovies.map((movie) => {
        let movieURL = `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
        return <Carousel.Item>
            <img
                className="carouselImg"
                src={movieURL}
                alt="First slide"
            />
        </Carousel.Item>
    })}
</Carousel>
</>
        )}
}
export default connect(mapStateToProps)(UserMoviesCarousel);