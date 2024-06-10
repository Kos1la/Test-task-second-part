import Action from './ActionModel.js'

class ActionController {
    async logAction(req,res) {
        try {
            const {userId,action,timestamp} = req.body
            console.log(req.body)
            const newAction = new Action({userId,action,timestamp})
            await newAction.save()
            res.status(200).json(newAction)
        } catch (e) {
            console.log(e)
            res.status(500).json({ error: 'Log action error' });
        }
    }
    async getActions(req,res){
        try {
            const { userId, page = 1, limit = 10 } = req.query;
            const query = userId ? { userId } : {};
            const actions = await Action.find(query)
            res.json(actions);
        } catch (e) {
            console.log(e)
            res.status(500).json({ error: 'Get actions error' });
        }
    }
}

export default new ActionController()