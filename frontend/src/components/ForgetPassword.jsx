import { useState } from "react";
import AxiosInstance from "@/components/AxiosInstance";


export default function ForgetPassword() {
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [step, setStep] = useState(1); // Step 1 for email, Step 2 for OTP and reset

    const handleForgetPassword = async () => {
        try {
            const response = await AxiosInstance.post('/user/forget-password', { email });
            setStep(2);
        } catch (error) {
            console.error("Error sending email:", error);
        }
    };

    const handleVerifyOtp = async () => {
        try {
            const response = await AxiosInstance.post('/user/verify-otp', {
                otp,
                new_password: newPassword,
                confirm_password: confirmPassword,
            });
            alert("Password reset successful!");
        } catch (error) {
            console.error("Error verifying OTP:", error);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center text-gray-700">
                    {step === 1 ? "Forgot Password" : "Verify OTP"}
                </h2>

                {step === 1 ? (
                    <div>
                        <input
                            type="email"
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-200"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button
                            onClick={handleForgetPassword}
                            className="w-full mt-4 bg-indigo-600 text-white p-3 rounded hover:bg-indigo-500 transition"
                        >
                            Send OTP
                        </button>
                    </div>
                ) : (
                    <div>
                        <input
                            type="text"
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-200"
                            placeholder="Enter OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                        />
                        <input
                            type="password"
                            className="w-full mt-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-200"
                            placeholder="New Password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                        <input
                            type="password"
                            className="w-full mt-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-200"
                            placeholder="Confirm New Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <button
                            onClick={handleVerifyOtp}
                            className="w-full mt-4 bg-indigo-600 text-white p-3 rounded hover:bg-indigo-500 transition"
                        >
                            Reset Password
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
