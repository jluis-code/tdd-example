const urlUsers = 'https://jsonplaceholder.typicode.com/users';

const handlers = ({ axios }) => ({
    get:  async (req, res) => {
        const { data } = await axios.get(urlUsers);
        res.status(200).send(data);
    }, 
    post: async (req, res) => {
        const { data } = await axios.post(urlUsers, req.body);
        res.status(201).send(data);
    }, 
    put: async (req, res) => {
        const { id } = req.params;
        const { data } = await axios.put(`${urlUsers}/${id}`, req.body);
        res.sendStatus(204);
    }, 
    delete: async (req, res) => {
        const { id } = req.params;
        await axios.delete(`${urlUsers}/${id}`);
        res.sendStatus(204);
    }, 
})

module.exports = handlers