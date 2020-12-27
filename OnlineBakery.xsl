<?xml version="1.0" encoding="UTF-8" ?>
<xsl:transform xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">
    <xsl:output method="html" doctype-public="XSLT-compat" omit-xml-declaration="yes" encoding="UTF-8" indent="yes" />

    <xsl:template match="/">
      <hmtl>
        <head>
          <title>ZaraySalasLopez-2018287</title>
        </head>
        <xsl:apply-templates/>
      </hmtl>
    </xsl:template>

    <xsl:template match="category">
        <ul>
            <h2><xsl:apply-templates select="@name"/></h2>
            <xsl:for-each select="product">
            <ul><input name="item0" type="number" />
            <xsl:apply-templates select="@name"/></ul>
            </xsl:for-each>
        </ul>

    </xsl:template>
</xsl:transform>

