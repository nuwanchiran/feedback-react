import 'colors'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import connectDB from './config/db'
import errorMiddleware from './middleware/errorMiddleware'
import UserRoutes from './services/users/users.routes'
import FeedbackRoutes from './services/feedbacks/feedbacks.routes'
import CommentRoutes from './services/comments/comments.routes'

dotenv.config()

const app = express()

app.use( express.json() )
app.use( express.urlencoded( {extended: false} ) )
app.use( cors() )

const PORT = process.env.PORT || 9000

connectDB()

app.use( '/api/users', UserRoutes )
app.use( '/api/feedbacks', FeedbackRoutes )
app.use( '/api/comments', CommentRoutes )

app.use( errorMiddleware )
app.listen( PORT, () =>
  console.log( `running on localhost:${PORT}`.bgMagenta )
)