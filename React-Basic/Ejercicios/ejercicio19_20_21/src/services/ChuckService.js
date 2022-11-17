import APIRequest from "../utils/config/axios.config";

export default function getRandomJoke() {
    return APIRequest.get(
        '',
        {
            validateStatus: function (status) {
                return status < 500;
            }
        }); //=> Aqui le decimos precisamente a que lugar ir y que el estatus sea menor a 500
}