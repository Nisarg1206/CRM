const Contact = require("../models/Contact");

exports.createContact = async (req, res) => {
    try {
        const contact = new Contact(req.body)
        contact.save();
        res.status(201).json({
            succes: true,
            message: "Contact created successfully",
        });
    } catch (error) {
        res.status(400).json({
            succes:false,
            error: error
        })
    }
}

exports.getContact = async (req, res) => {
    try {
        const contacts = await Contact.find();
        if (contacts.length === 0)
        {
            res.status(200).json({
                success:true,
                message:"No contact saved till now"
            })
        }
        else
        {
            res.status(200).json({
                success:true,
                message:contacts
            })
        }
    } catch (error) {
        res.status(400).json({
            succes: false,
            error:error
        })
    }
}

exports.updateContact = async (req, res) => {
    try {
        const contact = await Contact.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )

        if (!contact)
        {
            res.status(404).json({
                error:"Contact details not found"
            })
        }
        else
        {
            res.status(200).json({
                success: true,
                message:contact
            })
        }
    }
    catch (err)
    {
        res.status(400).json({
            success:false,
            error:err
        })
    }
}

exports.deleteContact = async(req, res)=> {
    try {
        const contact = await Contact.findByIdAndDelete(req.params.id);

        if (!contact)
        {
            res.status(404).json({
                success: true,
                message:"Contact details not found"
            })
        }
        else
        {
            res.status(200).json({
                success: true,
                message:"Successfully deleted contact"
            })
        }
    } catch (error) {
        res.status(400).json({
            success:false,
            error:error
        })
    }
}