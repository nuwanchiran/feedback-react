import express from 'express'
import protect from '../../middleware/authMiddleware'
import {getSpecificUser, loginUser, registerUser} from './users.controller'

const UserRoutes = express.Router()


UserRoutes.post( '/', registerUser )


UserRoutes.post( '/login', loginUser )


UserRoutes.get( '/:id', protect, getSpecificUser )

export default UserRoutes