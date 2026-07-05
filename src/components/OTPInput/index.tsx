import { FC, useCallback, useRef, useState } from 'react';
import { Button } from '../atoms/button';

/**
 * Features
 * - Should have digit count
 * - Default first input should be active
 * - On entering value next input box should be focused
 */

interface OTPInputProps {
    digitCount: number;
    onChange?: (otp: string) => void;
}

export const OTPInput: FC<OTPInputProps> = ({ digitCount, onChange }) => {
    const [otpValue, setOTPValue] = useState(Array(digitCount).fill(''));

    const inputRefs = useRef<Map<number, HTMLInputElement>>(new Map());

    const registerInput = useCallback(
        (index: number) => (node: HTMLInputElement) => {
            inputRefs.current.set(index, node);
        },
        []
    );

    const handleOnChange = useCallback(
        (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
            const digit = e.target.value.replace(/\D/g, '').slice(-1);
            setOTPValue((prev) => {
                const next = [...prev];
                next[index] = digit;
                if (next.every(Boolean)) onChange?.(next.join(''));
                return next;
            });
            if (digit) inputRefs.current.get(Math.min(index + 1, digitCount - 1))?.focus();
        },
        [digitCount, onChange]
    );

    return (
        <div className="border rounded-md px-8 py-8">
            <div className="flex justify-center mb-8">
                <h1>Please fill the OTP</h1>
            </div>
            <div className="flex gap-8">
                {otpValue.map((_, index) => {
                    return (
                        <input
                            key={index}
                            ref={registerInput(index)}
                            className="border w-[50px] h-[50px] p-4 text-center"
                            type="text"
                            pattern="[0-9]*"
                            maxLength={1}
                            onChange={handleOnChange(index)}
                            value={otpValue[index]}
                            autoFocus={index === 0}
                            inputMode="numeric"
                        />
                    );
                })}
            </div>
            <div className="flex justify-center p-4">
                <Button className="w-[120px]">Submit</Button>
            </div>
        </div>
    );
};

export const OTPPage = () => {
    return (
        <div className="flex rounded-md justify-center h-full items-center">
            <OTPInput digitCount={6} />
        </div>
    );
};
