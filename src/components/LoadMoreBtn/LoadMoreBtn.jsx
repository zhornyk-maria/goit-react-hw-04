
import css from './LoadMoreRtn.module.css';

const LoadMoreBtn = ({ onLoadMore, hasMoreImages }) => {
    if (!hasMoreImages) {
        return null;
    }

    return (
        <button className={css.btnLoadMore} onClick={onLoadMore}>Load more</button>
    );
};

export default LoadMoreBtn;
