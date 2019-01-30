import PartyModel from '../models/partyModel';

const Party = {

  createParty(req, res) {
    if (!req.body.partyName && !req.body.partyAddress) {
      return res.status(400).send({ message: 'party name and address fields are required' });
    }
    const party = PartyModel.create(req.body);
    return res.status(201).send(party);
  },

  getAllParty(req, res) {
    const parties = PartyModel.findAll();
    return res.status(200).send(parties);
  },

  getOneParty(req, res) {
    const party = PartyModel.findOne(req.params.id);
    if (!party) {
      return res.status(404).send({ message: 'Party not found' });
    }
    return res.status(200).send(party);
  },

  updateParty(req, res) {
    const party = PartyModel.findOne(req.params.id);
    if (!party) {
      return res.status(404).send({ message: 'Party not found' });
    }
    const updatedParty = PartyModel.update(req.params.id, req.body);
    return res.status(200).send(updatedParty);
  },

  deleteParty(req, res) {
    const party = PartyModel.findOne(req.params.id);
    if (!party) {
      return res.status(404).send({ message: 'Party not found' });
    }
    const partyD = PartyModel.delete(req.params.id);
    return res.status(204).send(partyD);
  },
};

export default Party;
