#!/usr/bin/env node

/**
 * Brand Asset Audit Script
 * Checks for missing assets, naming compliance, and optimization opportunities
 */

const fs = require('fs')
const path = require('path')

const REQUIRED_ASSETS = [
  'public/favicon.ico',
  'public/icon-192x192.png',
  'public/icon-512x512.png',
  'public/apple-touch-icon.png',
  'public/assets/logos/localmint-logo-primary.svg',
  'public/assets/logos/localmint-logo-light.svg',
  'public/assets/logos/localmint-logo-dark.svg',
  'public/assets/patterns/lotus-pattern.svg'
]

const NAMING_CONVENTION = /^localmint-[a-z]+-[a-z]+-[a-z0-9]+\.(svg|png|jpg|webp)$/

function auditAssets() {
  console.log('🔍 Starting Brand Asset Audit...\n')

  const results = {
    missing: [],
    present: [],
    namingIssues: [],
    optimizationNeeded: []
  }

  // Check required assets
  REQUIRED_ASSETS.forEach(assetPath => {
    if (fs.existsSync(assetPath)) {
      results.present.push(assetPath)
      
      // Check file size for optimization
      const stats = fs.statSync(assetPath)
      if (stats.size > 100000) { // 100KB
        results.optimizationNeeded.push({
          path: assetPath,
          size: `${(stats.size / 1024).toFixed(2)}KB`,
          reason: 'File size too large'
        })
      }
    } else {
      results.missing.push(assetPath)
    }
  })

  // Check naming conventions in assets directory
  const assetsDir = 'public/assets'
  if (fs.existsSync(assetsDir)) {
    function checkDirectory(dir) {
      const files = fs.readdirSync(dir)
      files.forEach(file => {
        const filePath = path.join(dir, file)
        const stat = fs.statSync(filePath)
        
        if (stat.isDirectory()) {
          checkDirectory(filePath)
        } else if (file.startsWith('localmint-') && !NAMING_CONVENTION.test(file)) {
          results.namingIssues.push(filePath)
        }
      })
    }
    
    checkDirectory(assetsDir)
  }

  // Generate report
  console.log('📊 AUDIT RESULTS')
  console.log('================\n')

  console.log(`✅ Assets Present: ${results.present.length}`)
  results.present.forEach(asset => console.log(`   ${asset}`))

  if (results.missing.length > 0) {
    console.log(`\n❌ Missing Assets: ${results.missing.length}`)
    results.missing.forEach(asset => console.log(`   ${asset}`))
  }

  if (results.namingIssues.length > 0) {
    console.log(`\n⚠️  Naming Issues: ${results.namingIssues.length}`)
    results.namingIssues.forEach(asset => console.log(`   ${asset}`))
  }

  if (results.optimizationNeeded.length > 0) {
    console.log(`\n🔧 Optimization Needed: ${results.optimizationNeeded.length}`)
    results.optimizationNeeded.forEach(item => 
      console.log(`   ${item.path} (${item.size}) - ${item.reason}`)
    )
  }

  // Recommendations
  console.log('\n💡 RECOMMENDATIONS')
  console.log('==================\n')

  if (results.missing.length > 0) {
    console.log('1. Create missing assets:')
    console.log('   - Generate favicon from main logo')
    console.log('   - Create PWA icons in required sizes')
    console.log('   - Export logo variants (light/dark)')
  }

  if (results.namingIssues.length > 0) {
    console.log('2. Fix naming conventions:')
    console.log('   - Use format: localmint-[type]-[variant]-[size].[ext]')
    console.log('   - Examples: localmint-logo-primary-large.svg')
  }

  if (results.optimizationNeeded.length > 0) {
    console.log('3. Optimize large assets:')
    console.log('   - Compress images without quality loss')
    console.log('   - Use WebP format for photos')
    console.log('   - Optimize SVGs with SVGO')
  }

  console.log('\n✨ Audit Complete!')
  
  return results
}

// Run audit if called directly
if (require.main === module) {
  auditAssets()
}

module.exports = { auditAssets }