import { useState } from 'react'
import {
  Box,
  TextField,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
  Button,
  Typography,
  Grid,
  Paper
} from '@mui/material'


export default function OtherForm () {
  const qrCodes = {
  /*  100: qr1,
    200: qr2,
    300: qr3,
    400: qr4,*/
    
  }

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    collegeName: '',
    country: '',
    state: '',
    section: 'PG',
    role: 'student',
    Events: [],
    amount: 0,
    Image: null
  })

  const [errors, setErrors] = useState({})
  const [newerrors, setNewErrors] = useState({})
  const [qrCode, setQrCode] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value, files } = e.target
    if (name === 'Image') {
      setFormData(prev => ({ ...prev, [name]: files[0] }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))

      if (name === 'role') {
        setFormData(prev => ({
          ...prev,
          Events: [],
          amount: 0
        }))
        setQrCode(value === 'teacher' ? qrCodes[200] : null)
      }
    }
  }

  const handleCheckboxChange = e => {
    const { value, checked } = e.target

    setFormData(prev => {
      const updatedEvents = checked
        ? [...prev.Events, value]
        : prev.Events.filter(event => event !== value)

      const updatedAmount = updatedEvents.length * 100
      setQrCode(qrCodes[updatedAmount] || null)

      return { ...prev, Events: updatedEvents, amount: updatedAmount }
    })
  }

  const validate = () => {
    const newErrors = {}

    if (!formData.firstName.trim())
      newErrors.firstName = 'First Name is required.'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last Name is required.'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid.'
    }
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required.'
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = 'Mobile number must be 10 digits.'
    }
    if (!formData.collegeName.trim())
      newErrors.collegeName = 'College Name is required.'
    if (!formData.country.trim()) newErrors.country = 'Country is required.'
    if (!formData.state.trim()) newErrors.state = 'State is required.'
    if (formData.role === 'student' && formData.Events.length === 0) {
      newErrors.Events = 'At least one event must be selected.'
    }
    if (!formData.Image) newErrors.Image = 'Image is required.'

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setIsSubmitting(true);

    if (!validate()) {
      return
    }

    const apiEndpoint =
      formData.role === 'student'
        ? /*`${import.meta.env.VITE_APP_BASE_URL}/api/v1/register`*/ `https://nci25.moderncollegegk.in/api/v1/register`
        : /*`${import.meta.env.VITE_APP_BASE_URL}/api/v1/register-staff`*/ `https://nci25.moderncollegegk.in/api/v1/register-staff`

    const formDataToSubmit = new FormData()
    for (const key in formData) {
      if (key === 'Image' && formData[key]) {
        formDataToSubmit.append(key, formData[key])
      } else if (key === 'Events') {
        formDataToSubmit.append(key, JSON.stringify(formData[key]))
      } else {
        formDataToSubmit.append(key, formData[key])
      }
    }

    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        body: formDataToSubmit
      })

      if (response.ok) {
        const data = await response.json()
        alert('Form submitted successfully!',`${data}`)
        setIsSubmitting(false);
      } else {
        alert('Form submission failed!')
      }
    } catch (error) {
      setNewErrors(error.message)
    }
  }

  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: { xs: '90%', sm: '80%', md: '600px' },
        mx: 'auto',
        p: 3,
        backgroundColor: 'white',
        borderRadius: 2
      }}
    >
      <Box component='form' onSubmit={handleSubmit}>
        <Typography variant='h4' textAlign='center' gutterBottom>
          Registration Form
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label='First Name'
              name='firstName'
              value={formData.firstName}
              onChange={handleChange}
              fullWidth
              required
              error={!!errors.firstName}
              helperText={errors.firstName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label='Last Name'
              name='lastName'
              value={formData.lastName}
              onChange={handleChange}
              fullWidth
              required
              error={!!errors.lastName}
              helperText={errors.lastName}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label='Email'
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              fullWidth
              required
              error={!!errors.email}
              helperText={errors.email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label='Mobile'
              type='tel'
              name='mobile'
              value={formData.mobile}
              onChange={handleChange}
              fullWidth
              required
              error={!!errors.mobile}
              helperText={errors.mobile}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label='College Name'
              name='collegeName'
              value={formData.collegeName}
              onChange={handleChange}
              fullWidth
              required
              error={!!errors.collegeName}
              helperText={errors.collegeName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label='Country'
              name='country'
              value={formData.country}
              onChange={handleChange}
              fullWidth
              required
              error={!!errors.country}
              helperText={errors.country}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label='State'
              name='state'
              value={formData.state}
              onChange={handleChange}
              fullWidth
              required
              error={!!errors.state}
              helperText={errors.state}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography variant='subtitle1'>User Type:</Typography>
            <RadioGroup
              row
              name='role'
              value={formData.role}
              onChange={handleChange}
            >
              <FormControlLabel
                value='student'
                control={<Radio />}
                label='Student'
              />
              <FormControlLabel
                value='teacher'
                control={<Radio />}
                label='Teacher'
              />
            </RadioGroup>
          </Grid>

          {formData.role === 'student' && (
            <>
              <Grid item xs={12}>
                <Typography variant='subtitle1'>Education Level:</Typography>
                <RadioGroup
                  row
                  name='section'
                  value={formData.section}
                  onChange={handleChange}
                >
                  <FormControlLabel value='UG' control={<Radio />} label='UG' />
                  <FormControlLabel value='PG' control={<Radio />} label='PG' />
                </RadioGroup>
              </Grid>

              <Grid item xs={12}>
                <Typography variant='subtitle1'>Events:</Typography>
                <FormGroup row>
                  <FormControlLabel
                    control={
                      <Checkbox
                        value='Int Conf'
                        checked={formData.Events.includes('Int Conf')}
                        onChange={handleCheckboxChange}
                      />
                    }
                    label='International Conference'
                  />

                  <FormControlLabel
                    control={
                      <Checkbox
                        value='Brain Battle'
                        checked={formData.Events.includes('Brain Battle')}
                        onChange={handleCheckboxChange}
                      />
                    }
                    label='Brain Battle (Day1)'
                  />

                  <FormControlLabel
                    control={
                      <Checkbox
                        value='Media Splash'
                        checked={formData.Events.includes('Media Splash')}
                        onChange={handleCheckboxChange}
                      />
                    }
                    label='Media Splash (Day1)'
                  />

                  <FormControlLabel
                    control={
                      <Checkbox
                        value='Wisdom War'
                        checked={formData.Events.includes('Wisdom War')}
                        onChange={handleCheckboxChange}
                      />
                    }
                    label='Wisdom War (Day1)'
                  />

                  <FormControlLabel
                    control={
                      <Checkbox
                        value='Hack in Dark'
                        checked={formData.Events.includes('Hack in Dark')}
                        onChange={handleCheckboxChange}
                      />
                    }
                    label='Hack In The Dark (Day2)'
                  />

                  <FormControlLabel
                    control={
                      <Checkbox
                        value='Spark The Idea'
                        checked={formData.Events.includes('Spark The Idea')}
                        onChange={handleCheckboxChange}
                      />
                    }
                    label='Spark The Idea (Day2)'
                  />

                  <FormControlLabel
                    control={
                      <Checkbox
                        value='Gold Rush'
                        checked={formData.Events.includes('Gold Rush')}
                        onChange={handleCheckboxChange}
                      />
                    }
                    label='Gold Rush (Day2)'
                  />

                </FormGroup>
                {errors.Events && (
                  <Typography color='error' variant='body2'>
                    {errors.Events}
                  </Typography>
                )}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label='Amount'
                  name='amount'
                  value={formData.amount}
                  InputProps={{ readOnly: true }}
                  fullWidth
                />
              </Grid>
            </>
          )}

          {formData.role === 'teacher' && (
            <Grid item xs={12}>
              <Typography variant='subtitle1'>Events:</Typography>
              <FormControlLabel
                control={
                  <Checkbox
                    value='national_conference'
                    checked={formData.Events.includes('national_conference')}
                    onChange={handleCheckboxChange}
                  />
                }
                label='National Conference'
              />
            </Grid>
          )}
          {qrCode && (
            <Grid
              item
              xs={12}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mt: 2
              }}
            >
              <Box
                sx={{
                  width: '300px',
                  height: '400px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  overflow: 'hidden'
                }}
              >
                <img
                  src={qrCode}
                  alt='QR Code'
                  style={{ width: '100%', height: '100%' }}
                />
              </Box>
            </Grid>
          )}

          <Grid item xs={12}>
            <label>Upload Transaction Screenshot</label>
            <input
              label='Upload Image'
              type='file'
              name='Image'
              onChange={handleChange}
              required
            />
          </Grid>
          <Typography error= {newerrors} ></Typography>
          <Grid item xs={12}>
            <Box mt={3}>
              <Button
                type='submit'
                variant='contained'
                color='primary'
                fullWidth
                disabled={isSubmitting}
              >
                Submit
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  )
}
