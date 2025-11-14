<script setup>
import { ref } from 'vue'
import { ethers } from 'ethers'

const address = ref('')
const isConnected = ref(false)

async function connectWallet() {
  if (!window.ethereum) {
    alert('🦊 Please install MetaMask first!')
    return
  }
  try {
    const provider = new ethers.BrowserProvider(window.ethereum)
    const accounts = await provider.send('eth_requestAccounts', [])
    address.value = accounts[0]
    isConnected.value = true
  } catch (err) {
    console.error(err)
    alert('❌ Connection failed!')
  }
}
</script>

<template>
  <div class="center div-central">
    <h1>Test your browser</h1>
    <p v-if="!isConnected">CLick the button to check if your browser supports wallet connecting</p>
    <p v-else>✅ Connected, here is your address</p>
    <button v-if="!isConnected" @click="connectWallet" class="connect-btn">
      🔗 Connect Wallet
    </button>
    <div v-else class="address-display">
      <span>{{ address }}</span>
    </div>
  </div>
</template>

<style scoped>
.div-central {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  color: #f0f6fc;
  font-family: 'Inter', sans-serif;
}
.connect-btn {
  padding: 12px 24px;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: 0.3s ease;
}

.address-display {
  font-size: 1rem;
  background: #161b22;
  padding: 12px 20px;
  border-radius: 12px;
  margin-top: 12px;
  word-break: break-all;
}
</style>
