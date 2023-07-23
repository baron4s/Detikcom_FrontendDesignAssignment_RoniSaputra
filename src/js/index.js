const logoElement = document.getElementById('uploadLogo')
const evidenceImgChange = document.querySelector('.display-logo')

if (logoElement) {
  logoElement.addEventListener('change', () => {
    const photo = logoElement.files[0]
    if (!photo) return

    const reader = new FileReader()
    reader.onload = (event) => {
      if (this.defaultImage) {
        evidenceRecordImg.classList.add('d-none')
      }
      evidenceImgChange.style.backgroundImage = `url('${event.target.result}')`
    }

    reader.readAsDataURL(photo)
  })
}

const fileCompanyProfile = document.getElementById('profilPerusahaan')

if (fileCompanyProfile) {
  fileCompanyProfile.addEventListener('change', (event) => {
    const { 0: File } = event.target.files
    const textField = document.getElementById('fieldCompanyProfile')

    textField.innerText = File.name
  })
}

const listLogo = document.querySelector('.logo-list').cloneNode(true)
console.log(listLogo)
const parentListLogo = document.querySelector('.logo')
parentListLogo.appendChild(listLogo)
