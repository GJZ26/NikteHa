import {dbconnect} from '../../../utils/db'

dbconnect();
export default function handler(req, res) {
    res.status(200).json("surveys")
}
