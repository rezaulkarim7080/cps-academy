import express from "express";
import { isAdmin, isAuthenticatedUser, isStudent } from "../middleware/auth.js";
import { UserControlller, deleteUserCOntroller, forgotPassword, loginUser, registerUser, singleUserController, updateProfileController, updateUserController, } from "../controllers/userController.js";



const router = express.Router();


router.post("/register", registerUser);

router.post("/login", loginUser);

router.post("/forgot-password", forgotPassword);


// //protected user route auth
router.get("/user-auth", isAuthenticatedUser, (req, res) => {
    res.status(200).send({ ok: true });
});



router.get("/admin-auth", isAuthenticatedUser, isAdmin, (req, res) => {
    res.status(200).send({ ok: true });
});

router.get("/student-auth", isAuthenticatedUser, isStudent, (req, res) => {
    res.status(200).send({ ok: true });
});

// //update profile
router.put("/profile", isAuthenticatedUser, updateProfileController);
router.put("/profile", isStudent, updateProfileController);







// /////////////// ADMIN get all user 

//update user
router.put("/user/:id", updateUserController);

//getALl users
router.get("/users", UserControlller);

//single user
router.get("/user/:slug", singleUserController);

//delete user
router.delete("/user/:id", deleteUserCOntroller);

export default router;
