const cloudName = 'hgijnwt9'
const uploadPresent ='raman007'
const uplaodUrl =  `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`
import axios from 'axios'

class Cloudinary{
    async upload(image){
        let formData = new FormData()
        formData.append('file',image)
        formData.append("upload_present", uploadPresent)
        const result = await axios.post(this.uploadUrl, formData)
        return result.data.secure_url
    }
}
export default new Cloudinaryservices()


