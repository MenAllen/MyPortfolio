import React, { ReactNode } from 'react'
import { Formik } from 'formik'

const ContactForm = () => {
	return (
		<section className='mx-8 md:mx-10 xl:max-w-screen-xl xl:mx-auto mb-20 xl:flex xl:py-10'>
			<h2 className='text-lg font-serif font-bold mt-10 mb-6 xl:w-5/12 xl:mt-0'>Contact Me</h2>

			<Formik
				initialValues={{ name: '', email: '', message: '' }}
				validate={(values) => {
					const errors: { name?: string; email?: string; message?: string } = {}
					if (!values.name) {
						errors.name = '* Required'
					} else if (!values.email) {
						errors.email = '* Required'
					} else if (!values.message) {
						errors.message = '* Required'
					} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
						errors.email = '* Invalid email address'
					}
					return errors
				}}
				onSubmit={(values, { setSubmitting }) => {
					console.log('submit')
					setTimeout(() => {
						alert(JSON.stringify(values, null, 2))
						setSubmitting(false)
					}, 400)
				}}
			>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
					isSubmitting,
					/* and other goodies */
				}) => (
					<form action='' onSubmit={handleSubmit} className='xl:w-7/12'>
						<label className='font-bold leading-8' htmlFor='name'>
							Name
						</label>
						{errors.name && touched.name && <ErrorText>{errors.name}</ErrorText>}
						<input
							type='text'
							name='name'
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.name}
							className={errors.name && touched.name ? 'bg-gray-200 w-full p-3 mb-6 focus:outline-none focus:ring-myCyan-500 focus:ring-2 error-outline' : 'bg-gray-200 w-full p-3 mb-6 focus:outline-none focus:ring-myCyan-500 focus:ring-2'}
							placeholder='Jane Appleseed'
						/>

						<label className='font-bold leading-8' htmlFor='email'>
							Email Address
						</label>
						{errors.email && touched.email && <ErrorText>{errors.email}</ErrorText>}
						<input
							type='email'
							name='email'
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.email}
							className={errors.email && touched.email ? 'bg-gray-200 w-full p-3 mb-6 focus:outline-none focus:ring-myCyan-500 focus:ring-2 error-outline' : 'bg-gray-200 w-full p-3 mb-6 focus:outline-none focus:ring-myCyan-500 focus:ring-2'}
							placeholder='email@example.com'
						/>

						<label className='font-bold leading-8' htmlFor='name'>
							Message
						</label>
						{errors.message && touched.message && <ErrorText>{errors.message}</ErrorText>}
						<textarea
							rows={5}
							name='message'
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.message}
							className={errors.message && touched.message ? 'bg-gray-200 w-full p-3 mb-6 focus:outline-none focus:ring-myCyan-500 focus:ring-2 error-outline' : 'bg-gray-200 w-full p-3 mb-6 focus:outline-none focus:ring-myCyan-500 focus:ring-2'}
							placeholder='How can I help?'
						/>

						<button type='submit' disabled={isSubmitting} className='text-xxs border rounded uppercase text-white py-4 px-10 border-myBlue-700 bg-myBlue-700 hover:bg-myCyan-500 hover:border-myCyan-500 disabled:bg-myGrey-300 disabled:border-myGrey-300 transition-all'>
							Send Message
						</button>
					</form>
				)}
			</Formik>
		</section>
	)
}

const ErrorText = ({ children }: { children: ReactNode }) => {
	return <p className='form-error-text'>{children}</p>
}

export default ContactForm