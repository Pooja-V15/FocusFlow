function crud(Model, options = {}) {
  const ownerField = options.ownerField || "user";
  return {
    list: async (req, res) => {
      const rows = await Model.find({ [ownerField]: req.user._id }).sort({ createdAt: -1 });
      res.json(rows);
    },
    create: async (req, res) => {
      const row = await Model.create({ ...req.body, [ownerField]: req.user._id });
      res.status(201).json(row);
    },
    get: async (req, res) => {
      const row = await Model.findOne({ _id: req.params.id, [ownerField]: req.user._id });
      if (!row) return res.status(404).json({ message: "Not found" });
      res.json(row);
    },
    update: async (req, res) => {
      const row = await Model.findOneAndUpdate({ _id: req.params.id, [ownerField]: req.user._id }, req.body, { new: true });
      if (!row) return res.status(404).json({ message: "Not found" });
      res.json(row);
    },
    remove: async (req, res) => {
      const row = await Model.findOneAndDelete({ _id: req.params.id, [ownerField]: req.user._id });
      if (!row) return res.status(404).json({ message: "Not found" });
      res.json({ message: "Deleted" });
    }
  };
}

module.exports = crud;
