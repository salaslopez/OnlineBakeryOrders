<?xml version="1.0" ?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:template match="/">
        <table id="menuTable" border="1" class="indent">
            <thead>
                <tr>
                    <th colspan="4">Select the final products ordered in the OnlineBakery.</th>
                </tr>
                <tr>
                    <th>Ordered</th>
                    <th>Item</th>
                    <th>Ingredient</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
                <xsl:for-each select="/onlineBakeryOrders/section">
                    <tr>
                        <td colspan="4">
                            <xsl:value-of select="@name" />
                        </td>
                    </tr>
                    <xsl:for-each select="finalProduct">
                        <tr id="{position()}">
                            <xsl:attribute name="mostwanted">
                                <xsl:value-of select="boolean(@mostwanted)" />
                            </xsl:attribute>
                            <xsl:attribute name="ingredient">
                                <xsl:value-of select="ingredient" />
                            </xsl:attribute>
                            <xsl:attribute name="unit">
                                <xsl:value-of select="@unit" />
                            </xsl:attribute>
                            <td align="center">
                                <input name="item0" type="checkbox"/>
                            </td>
                            <td>
                                <xsl:value-of select="item" />
                            </td>
                            <td>
                                <xsl:value-of select="ingredient" />
                            </td>
                            <td align="right">
                                <xsl:value-of select="quantity" />
                            </td>
                        </tr>
                    </xsl:for-each>
                </xsl:for-each>
            </tbody>
        </table>
    </xsl:template>
</xsl:stylesheet>