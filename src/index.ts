import express from 'express'
import path from 'path'

const app: express.Express = express();
const router = express.Router();

//app.get('/', (req, res) => {
// 
//    res.send('Hello World');
//
//});

app.use(express.static(path.join(__dirname, '../html')));


router.post('/rpc', (req: express.Request, res: express.Response) => {
  try {
    res.status(200).json({ message: "登録しました" });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
});
app.listen(8080);


export default router;