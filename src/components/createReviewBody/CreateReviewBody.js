import React, {useState} from "react";
import { useForm } from "react-hook-form";
import styles from "./CreateReviewBody.module.css";
import star1Picture from "../../assets/Star_one.svg";
import star2Picture from "../../assets/Star_two.svg";
import star3Picture from "../../assets/Star_three.svg";
import star4Picture from "../../assets/Star_four.svg";
import star5Picture from "../../assets/Star_five.svg";

function CreateReviewBody() {

    const [choiceClass, setChoiceClass] = useState("");

    const {register, handleSubmit, formState: {errors}} = useForm();

    function onSubmit(data) {
        //e.preventDefault();
        console.log(data);
    }

    return (
        <>
            <h3 className={styles["create-review-body__title"]}>
                CREATE A REVIEW FOR
            </h3>

            <form className={styles["create-review-body"]} onSubmit={handleSubmit(onSubmit)}>
                <select
                    className={styles["create-review-body__dropdown"]}
                    {...register("choice")}>
                    <option value="CICO">"CICO, IT'S ALL YOU NEED"</option>
                    <option value="SNACKS">"THE PERFECT POST WORKOUT SNACKS"</option>
                    <option value="TESTOSTERON">"TESTOSTERON LEVES & DIETS"</option>
                </select>

                <textarea
                    className={styles["create-review-body__input"]}
                    rows="4"
                    cols="40"
                    placeholder="WRITE YOUR REVIEW HERE"
                    name="review"
                    id="review"
                    {...register("review", {
                        required: {
                            value: true,
                            message: "THIS FIELD CAN'T BE EMPTY"
                        }, maxLength: {
                            value: 250,
                            message: "MAX LENGTH IS 250 CHARACTERS"
                        }
                    })}
                />
                {errors.review && <p className={styles["create-review-body__error1"]}>{errors.review.message}</p>}

                <h3
                    className={styles["create-review-body__rating-message"]}>
                    GIVE THIS CLASS A RATING<br/>OUT OF 5 STARS
                </h3>

                <div className={styles["create-review-body__rating-container"]}>
                    <img className={styles["create-review-body__rating-container__icon"]} src={star1Picture} alt="star1-image"/>
                    <img className={styles["create-review-body__rating-container__icon"]} src={star2Picture} alt="star2-image"/>
                    <img className={styles["create-review-body__rating-container__icon"]} src={star3Picture} alt="star3-image"/>
                    <img className={styles["create-review-body__rating-container__icon"]} src={star4Picture} alt="star4-image"/>
                    <img className={styles["create-review-body__rating-container__icon"]} src={star5Picture} alt="star5-image"/>
                </div>

                <select
                    className={styles["create-review-body__dropdown"]}
                    {...register("stars")}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>

                <button
                    className={styles["create-review-body__post-button"]}
                    type="submit">
                    POST
                </button>
            </form>
        </>
    );
}

export default CreateReviewBody;


// <select className={styles["create-review-body__dropdown"]} onChange={(event => {
//     const selectedClass = event.target.value;
//     setChoiceClass(selectedClass)
// })}>