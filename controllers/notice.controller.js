const Notice = require('../models/notice.model');
exports.noticeController = (req, res) => {
    const { user, subject, description} = req.body;
    const notice = new Notice({
        user,
        subject,
        description,
      });

      notice.save((err, notice) => {
        if (err) {
          console.log(err);
        //   console.log('Save error', errorHandler(err));
          return res.status(401).json({
            errors: errorHandler(err)
          });
        } else {
          return res.json({
            success: true,
            message: notice,
            message: 'Notice created success'
          });
        }
      });
};
exports.getNoticeController = (req, res) => {
    Notice.find()
    .then(notice =>{
        res.json(notice)
    }).catch(err =>{
        console.log(err)
    })
};