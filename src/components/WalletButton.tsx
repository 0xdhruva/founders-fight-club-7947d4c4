import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { Button } from './ui/button'
import { useToast } from './ui/use-toast'

export default function WalletButton() {
  const { address, isConnected } = useAccount()
  const { disconnect } = useDisconnect()
  const { toast } = useToast()

  const handleClick = () => {
    if (isConnected) {
      disconnect()
      toast({
        title: "Wallet disconnected",
        description: "Your wallet has been disconnected successfully."
      })
    } else {
      // The Web3Modal will be triggered automatically
      document.getElementById('w3m-button')?.click()
    }
  }

  return (
    <Button 
      onClick={handleClick}
      className="bg-ffc-red hover:bg-ffc-red/90 text-white"
    >
      {isConnected ? `${address?.slice(0, 6)}...${address?.slice(-4)}` : 'Connect Wallet'}
    </Button>
  )
}