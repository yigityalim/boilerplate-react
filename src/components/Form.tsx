import { FormProvider, useFormContext } from 'react-hook-form'
import { cn } from '@/lib/utils'
import {
    ButtonHTMLAttributes,
    FormEvent,
    FormEventHandler,
    ForwardedRef,
    forwardRef,
    ForwardRefExoticComponent,
    JSX,
    ReactNode,
    RefAttributes,
} from 'react'

function Form({
    children,
    methods,
    onSubmit,
    className,
    ...props
}: {
    children: ReactNode
    methods: ('GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD' | 'CONNECT' | 'TRACE')[]
    onSubmit: FormEventHandler<HTMLFormElement>
    className?: string
    props?: JSX.IntrinsicElements['form'] | unknown
}) {
    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        onSubmit(event)
    }

    return (
        <FormProvider {...methods}>
            <form
                onSubmit={handleSubmit}
                {...props}
                className={cn(className, 'w-full flex flex-col items-center justify-center gap-y-2')}
                noValidate
            >
                {children}
            </form>
        </FormProvider>
    )
}

type TitleProps = {
    children: ReactNode
    className: string
}

const Title: ForwardRefExoticComponent<TitleProps & RefAttributes<HTMLHeadingElement>> = forwardRef(
    ({ children, className }: TitleProps, ref: ForwardedRef<HTMLHeadingElement>) => {
        return (
            <h1
                className={cn(
                    'w-full text-start text-3xl font-bold leading-9 text-gray-900 dark:text-gray-100',
                    className
                )}
                ref={ref}
            >
                {children}
            </h1>
        )
    }
)

type InputProps = {
    children: ReactNode
    className: string
    disabled: boolean
    field: string
    placeholder: string
    type: string
    label: string
}

const Input: ForwardRefExoticComponent<InputProps & RefAttributes<HTMLInputElement>> = forwardRef(
    (
        { children, className, disabled = false, field, placeholder, type = 'text', label }: InputProps,
        ref: ForwardedRef<HTMLInputElement>
    ) => {
        return (
            <fieldset className={cn('w-full h-full', className)}>
                {label ? (
                    <label htmlFor={field} className='text-sm font-medium text-gray-700 dark:text-gray-300'>
                        {label}
                    </label>
                ) : null}
                <input
                    id={field}
                    name={field}
                    type={type}
                    disabled={disabled}
                    placeholder={placeholder}
                    className='appearance-none min-w-0 w-full bg-wash dark:bg-wash-dark border border-gray-300 py-2 px-4 text-base rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:placeholder-gray-400'
                    ref={ref}
                />
                {children}
            </fieldset>
        )
    }
)

type SelectProps = {
    children: ReactNode
    className: string
    defaultValue: string
    disabled: boolean
    field: string
    label: string
    options: { label: string; value: string }[]
}

const Select: ForwardRefExoticComponent<SelectProps & RefAttributes<HTMLSelectElement>> = forwardRef(
    (
        { children, className, defaultValue = '', disabled, field, label, options, ...props }: SelectProps,
        ref: ForwardedRef<HTMLSelectElement>
    ) => {
        return (
            <fieldset className={cn('w-full h-full', className)}>
                {label ? (
                    <label htmlFor={field} className='sr-only'>
                        {label}
                    </label>
                ) : null}
                <div className='relative'>
                    <select
                        id={field}
                        name={field}
                        disabled={disabled}
                        defaultValue={defaultValue}
                        className='appearance-none block w-full bg-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-base text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                        ref={ref}
                        {...props}
                    >
                        <option disabled value=''>
                            Please select an option
                        </option>
                        {options.map((option, index) => (
                            <option key={index} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    <div className='pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center'>
                        <svg
                            className='h-4 w-4 text-gray-400'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                            aria-hidden='true'
                        >
                            <path
                                fillRule='evenodd'
                                d='M5.293 7.293a1 1 0 011.414 0L10
                                10.586l3.293-3.293a1 1 0 111.414
                                1.414l-4 4a1 1 0 01-1.414 0l-4-4a1
                                1 0 010-1.414z'
                                clipRule='evenodd'
                            />
                        </svg>
                    </div>
                </div>
                {children}
            </fieldset>
        )
    }
)

type TextareaProps = {
    children: ReactNode
    className: string
    disabled: boolean
    field: string
    placeholder: string
    rows: number
}

const Textarea: ForwardRefExoticComponent<TextareaProps & RefAttributes<HTMLTextAreaElement>> = forwardRef(
    (
        { children, className, disabled = false, field, placeholder, rows = 4 }: TextareaProps,
        ref: ForwardedRef<HTMLTextAreaElement>
    ) => {
        return (
            <fieldset className={cn('w-full h-full', className)}>
                <textarea
                    id={field}
                    name={field}
                    disabled={disabled}
                    placeholder={placeholder}
                    rows={rows}
                    className='appearance-none min-w-0 w-full bg-white border border-gray-300 py-2 px-4 text-base rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:placeholder-gray-400'
                    ref={ref}
                />
                {children}
            </fieldset>
        )
    }
)

type ButtonProps = {
    children: ReactNode
    className: string
    disabled: boolean
    type: ButtonHTMLAttributes<HTMLButtonElement>['type']
}

const Button: ForwardRefExoticComponent<ButtonProps & RefAttributes<HTMLButtonElement>> = forwardRef(
    ({ children, className, disabled = false, type = 'submit' }: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
        return (
            <button
                type={type}
                disabled={disabled}
                className={cn(
                    'inline-flex w-full justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 active:scale-95 transition',
                    className
                )}
                ref={ref}
            >
                {children}
            </button>
        )
    }
)

function FormTitle(props: TitleProps): JSX.Element {
    return <Title {...props} />
}

function FormInput(props: InputProps): JSX.Element {
    const { formState, register } = useFormContext()

    return (
        <Input ref={register} {...props}>
            {formState?.errors ? <p className='mt-2 text-red-700 text-sm'>{formState.errors.root?.message}</p> : null}{' '}
        </Input>
    )
}

function FormSelect(props: SelectProps): JSX.Element {
    const { formState, register } = useFormContext()

    return (
        <Select ref={register} {...props}>
            {formState?.errors ? <p className='mt-2 text-red-700 text-sm'>{formState.errors.root?.message}</p> : null}
        </Select>
    )
}

function FormTextarea(props: TextareaProps): JSX.Element {
    const { formState, register } = useFormContext()

    return (
        <Textarea ref={register} {...props}>
            {formState?.errors ? <p className='mt-2 text-red-700 text-sm'>{formState.errors.root?.message}</p> : null}
        </Textarea>
    )
}

function FormButton(props: ButtonProps): JSX.Element {
    const { formState, register } = useFormContext()

    return (
        <Button ref={register} {...props}>
            {formState?.isLoading ? 'Loading...' : props.children}
        </Button>
    )
}

Form.Title = FormTitle
Form.Button = FormButton
Form.Input = FormInput
Form.Select = FormSelect
Form.Textarea = FormTextarea

export { Form, Input, Select, Textarea, Button }

/* Usage
    import { Form } from '@/components'

    <Form
        methods={['POST']}
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            console.log('submit', e)
        }}
    >
        <Form.Input type='text' name='name' placeholder='Name' required />
        <Form.Select
            name='subject'
            label='Subject'
            required
            options={[
                { value: 'general', label: 'General' },
                { value: 'support', label: 'Support' },
                { value: 'sales', label: 'Sales' },
            ]}
        />
        <Form.Button type='submit'>Gönder</Form.Button>
    </Form>
*/
