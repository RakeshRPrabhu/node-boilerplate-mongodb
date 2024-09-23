const Example = require('../models/exampleModel');

exports.createExample = async (req, res, next) => {
  try {
    const example = await Example.create(req.body);
    res.status(201).json({ success: true, data: example });
  } catch (error) {
    next(error);
  }
};

exports.getExamples = async (req, res, next) => {
  try {
    const examples = await Example.find();
    res.status(200).json({ success: true, data: examples });
  } catch (error) {
    next(error);
  }
};

exports.updateExample = async (req, res, next) => {
  try {
    const { id } = req.params;
    const example = await Example.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!example) {
      const error = new Error('Example not found');
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({ success: true, data: example });
  } catch (error) {
    next(error);
  }
};

exports.deleteExample = async (req, res, next) => {
  try {
    const { id } = req.params;
    const example = await Example.findByIdAndDelete(id);

    if (!example) {
      const error = new Error('Example not found');
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({ success: true, data: null });
  } catch (error) {
    next(error);
  }
};