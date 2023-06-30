import JSEncrypt from 'jsencrypt/bin/jsencrypt'

const handleRSA = (text) => {
    const publicKey='MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCgTxBUyHA65CMDZ5sdBusVIRCaZRN51AQnMeZ7tA4A216VQAc9capm6hnYg8KZxrakG9z8udeXk6zAtrvnw17D0/C1IQW7S/Y7yzftaDRm2AL1nVD3XSlXx3ZsU8Hcy2F38J+q+XJh6VvvzunvPFGfy1DfaF1tO7Hl8yZ1FzrKAQIDAQAB'
    const encryptor = new JSEncrypt()
    encryptor.setPublicKey(publicKey)
    return encryptor.encrypt(text)
}

export default handleRSA
