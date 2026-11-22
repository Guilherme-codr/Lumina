// Fluxo: (predeploy já fez o build) -> pede a mensagem -> commit + push na main -> publica dist no gh-pages
import { execFileSync } from 'node:child_process'
import { createInterface } from 'node:readline/promises'
import process from 'node:process'
import ghpages from 'gh-pages'

const git = (...args) => execFileSync('git', args, { stdio: 'inherit' })
const hasChanges = execFileSync('git', ['status', '--porcelain']).toString().trim() !== ''

if (hasChanges) {
  const rl = createInterface({ input: process.stdin, output: process.stdout })
  const msg = (await rl.question('Mensagem do commit: ')).trim()
  rl.close()
  if (!msg) {
    console.error('Mensagem vazia, deploy cancelado.')
    process.exit(1)
  }
  git('add', '-A')
  git('commit', '-m', msg)
} else {
  console.log('Nada para commitar, seguindo só com push e deploy.')
}

git('push')
await ghpages.publish('dist')
console.log('Publicado em https://guilherme-codr.github.io/Lumina/')
