db = require ('../../models/index')
const responseSuccess = require('../../res/responseSucces')
const responseError = require('../../res/responseError');
const { user } = require('../../models/index');

exports.addModal = async (req, res) => {
    try {
        const Id_calon_pemodal = req.params.id;
        const { uang_modal, max_pinjam } = req.body;
        const uang_menetap = 20000;

        const uang_modal_setelah_pengurangan = uang_modal - uang_menetap;

        const dataUser = await db.user.findByIdAndUpdate(Id_calon_pemodal, {
            $set: {
                tanam_modal: {
                    uang_menetap : uang_menetap,
                    uang_modal : uang_modal_setelah_pengurangan,
                    max_pinjam,
                },
            },
            role: 'penanam',
        }, { new: true });

        responseSuccess(res, dataUser, 200, "Success add modal!");
    } catch (error) {
       responseError(res, error);
    }
};


exports.withdraw = async (req, res) => {
    try{
        const userId = req.params.id;
        const {uang_withdraw} = req.body;
        const uang_valid_withdraw = 0;
        switch (uang_withdraw) {
            case 10000:
                uang_valid_withdraw = 10000;
                break;
            case 20000:
                uang_valid_withdraw = 20000;
                break;
            case 50000:
                uang_valid_withdraw = 50000;
                break;
            case 100000:
                uang_valid_withdraw = 100000;
                break;
            case 200000:
                uang_valid_withdraw = 200000;
                break;
            case 500000:
                uang_valid_withdraw = 500000;
                break;
            default:
                responseError(res, 400, 'gagal melakukan withdraw !');
                break;
        }
        const user = await db.user.findByIdAndUpdate(userId,{
            $inc:{
                'tanam_modal.uang_modal':uang_valid_withdraw
            }
        },{new:true});
        responseSuccess(res,user,200,"Success melakukan withdraw !");
    }catch(error){
        responseError(res,error)
    }
};

module.exports = exports;   
