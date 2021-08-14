import React from "react";
import styles from "./ReviewCreateContent.module.css";
import dietPicture from "../../assets/Diet(icon).png";
import {Link} from "react-router-dom";
import dumbbellPicture from "../../assets/Dumbbell(icon).png";
import platePicture from "../../assets/Plate(icon).png";
import toolsPicture from "../../assets/Tools(icon).png";

function ReviewCreateContent() {
    return (
        <div className={styles["review-create-content"]}>
            <div className={styles["review-create-content__title"]}>
                <h1>FIND REVIEWS FOR ALL YOU FAVOURITE CLASSES</h1>
            </div>

            <div className={styles["review-create-content__nutrition"]}>
                <img className={styles["review-create-content__nutrition__icon"]} src={dietPicture} alt="diet-icon"/>
                <Link
                    className={styles["review-create-content__nutrition__link"]}
                    to="/nutritionreviews">
                    NUTRITION
                </Link>
            </div>

            <div className={styles["review-create-content__buildmuscle"]}>
                <img className={styles["review-create-content__buildmuscle__icon"]} src={dumbbellPicture} alt="dumbbell-icon"/>
                <Link
                    className={styles["review-create-content__buildmuscle__link"]}
                    to="/buildmusclereviews">
                    BUILD MUSCLE
                </Link>
            </div>

            <div className={styles["review-create-content__buildpower"]}>
                <img className={styles["review-create-content__buildpower__icon"]} src={platePicture} alt="plate-icon"/>
                <Link
                    className={styles["review-create-content__buildpower__link"]}
                    to="/buildpowerreviews">
                    BUILD POWER
                </Link>
            </div>

            <div className={styles["review-create-content__build-a-homegym"]}>
                <img className={styles["review-create-content__build-a-homegym__icon"]} src={toolsPicture} alt="tools-icon"/>
                <Link
                    className={styles["review-create-content__build-a-homegym__link"]}
                    to="/buildahomegymreviews">
                    BUILD A HOME GYM
                </Link>
            </div>
        </div>
    );
}

export default ReviewCreateContent;