import React from "react";
import styles from "./SettingsContent.module.css";
import lockPicture from "../../assets/Lock(red).png"
import photoPicture from "../../assets/Photo(red).png";
import newsletterPicture from "../../assets/Newsletter(red).png";
import deletePicture from "../../assets/Delete(red).png";

function SettingsContent() {
    return (
      <div className={styles["settings-content"]}>
        <div className={styles["settings-content__icon-container"]}>
            <img className={styles["settings-content__icon-container__lock"]} src={lockPicture} alt="lock-image"/>
            <img className={styles["settings-content__icon-container__photo"]} src={photoPicture} alt="photo-image"/>
            <img className={styles["settings-content__icon-container__newsletter"]} src={newsletterPicture} alt="newsletter-image"/>
            <img className={styles["settings-content__icon-container__delete"]} src={deletePicture} alt="delete-image"/>
        </div>

        <div className={styles["settings-content__container1"]}>
            <div className={styles["settings-content__container1__item1"]}>
                <p>CHANGE YOUR PASSWORD</p>
                <label className={styles["settings-content__container1__item1__label"]}>
                    <input
                        className={styles["settings-content__container1__item1__label__input"]}
                        type="text"
                        placeholder="TYPE YOUR NEW PASSWORD"/>
                    <button
                        className={styles["settings-content__container1__item1__label__button"]} type="submit">
                        SUBMIT
                    </button>
                </label>
            </div>

            <div className={styles["settings-content__container2"]}>
                <p>CHANGE YOUR PROFILE PICTURE</p>
                <p className={styles["settings-content__container2__jpg-message"]}>PLEASE SELECT A JPG FILE</p>
                <button
                    className={styles["settings-content__container2__button"]} type="submit">
                    SELECT
                </button>
                <p
                    className={styles["settings-content__container2__jpg-confirm"]}>
                    IF YOU ARE A 100% SURE THIS IS YOUR PERFECT
                    PROFILE PICTURE, PRESS CONFIRM
                </p>
                <button
                    className={styles["settings-content__container2__button"]} type="submit">
                    CONFIRM
                </button>
            </div>

            <div className={styles["settings-content__container3"]}>
                <p>SEND ME THE F.C. NEWSLETTER</p>
                <button
                    className={styles["settings-content__container3__button"]} type="submit">
                    YES
                </button>
            </div>

            <div className={styles["settings-content__container4"]}>
                <p>DELETE ACCOUNT</p>
                <p
                    className={styles["settings-content__container4__message"]}
                    >IF YOU WISH TO DELETE YOUR ACCOUNT YOU MUST SEND A REQUEST TO ADMIN
                </p>
                <button
                    className={styles["settings-content__container4__button"]} type="submit"
                    >
                    DELETE MY ACCOUNT
                </button>
            </div>
        </div>
      </div>
    );
}

export default SettingsContent;