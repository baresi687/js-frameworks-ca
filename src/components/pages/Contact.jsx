import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '../Button.jsx';
import styles from './Contact.module.scss';
import contactUs from '../../assets/contact-us.jpg';
import { useState } from 'react';

const schema = yup.object({
  fName: yup.string().required('Full name is a required field').min(3, 'Full name must 3 characters or more'),
  subject: yup.string().required('Subject is a required field').min(3, 'Subject must be 3 characters or more'),
  email: yup.string().required('Email is a required field').email('Email must be in a valid format'),
  body: yup.string().required('Body is a required field').min(3, 'Body must be 3 characters or more'),
});

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [submitting, setSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function onSubmit(data) {
    setSubmitting(true);
    setTimeout(() => {
      console.log(data);
      reset();
      setSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  }

  return (
    <section className={styles.contact}>
      <div className={'container'}>
        <h1>Contact us</h1>
        <div className={'contact-container'}>
          <form onSubmit={handleSubmit(onSubmit)} onBlur={() => setIsSubmitted(false)}>
            <label htmlFor={'fName'}>
              <input
                className={errors.fName?.message ? 'error-input' : null}
                {...register('fName')}
                name={'fName'}
                placeholder={'Full name'}
              />
              {errors.fName?.message ? <p>{errors.fName?.message}</p> : null}
            </label>
            <label htmlFor={'subject'}>
              <input
                className={errors.subject?.message ? 'error-input' : null}
                {...register('subject')}
                name={'subject'}
                placeholder={'Subject'}
              />
              {errors.subject?.message ? <p>{errors.subject?.message}</p> : null}
            </label>
            <label htmlFor={'email'}>
              <input
                className={errors.email?.message ? 'error-input' : null}
                {...register('email')}
                name={'email'}
                type={'email'}
                placeholder={'Email'}
              />
              {errors.email?.message ? <p>{errors.email?.message}</p> : null}
            </label>
            <label htmlFor={'body'}>
              <textarea
                className={errors.body?.message ? 'error-input' : null}
                {...register('body')}
                name={'body'}
                placeholder={'Body'}
                rows={6}
              />
              {errors.body?.message ? <p>{errors.body?.message}</p> : null}
            </label>
            <Button type={'submit'}>
              {submitting ? (
                <>
                  <div className={'loader-submit'}></div>Processing ...
                </>
              ) : (
                'Submit'
              )}
            </Button>
            {isSubmitted && (
              <div className={'form-submitted'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="#38a169" d="m9 20.42l-6.21-6.21l2.83-2.83L9 14.77l9.88-9.89l2.83 2.83L9 20.42Z" />
                </svg>
                Form submitted (console.log)
              </div>
            )}
          </form>
          <img src={contactUs} alt={'Contact us'} />
        </div>
      </div>
    </section>
  );
}

export default Contact;
